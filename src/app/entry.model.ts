import { Leaf } from './leaf.model';
import { Dir } from './dir.model';
import { Member } from './member.model';

export interface Entry {
    type: string;
    name: string;
    layer: number;
    members?: any;
    value: any;
    expanded?: any;
}

export function MergeEntries() {
  
}

export function cloneEntry(oldEntry) {
  return {type : oldEntry.type,
          name: oldEntry.name,
          layer: oldEntry.layer,
          value : oldEntry.value.clone(),
          expanded : oldEntry.expanded
  };
}
export function ConvertFromOldDefJson(def) {
  const tree = {};
  const entries = [];
  initObject(tree);

  convert(tree, entries, def);
  return {tree, entries};
}


function initObject(obj) {
  obj.type = '';
  obj.name = '';
  obj.children = [];
}

function convert(tree, entries, def, layer = 0) {
  if (def.type === 'object') {
    // this is broken
    let obj = <any>{};
    if (layer === 0) {
      obj = tree;
    }
    initObject(obj);

    obj.type = def.type;
    obj.name = def.name;

    for (const child of def.members) {
      convert(obj, entries, child, layer + 1);
    }
    if (layer > 0) {
      tree.children.push(obj);
    }

  } else if (def.type === 'member') {

    const entryObject = <any>{};
    entryObject.name = def.name;
    for (const key of Object.keys(def.compiled)) {
      entryObject[key] = def.compiled[key];
    }

    entries.push(entryObject);

    const memberObject = <any>{};

    const typeChoices = [{
      old : 'raw',
      'new' :  'raw'
    }, {
      old : 'var',
      'new' : 'static',
      'parent' : true
    }, {
      old : 'ref',
      'new' : 'dynamic',
      'parent' : true
    }];

    const defConfig = typeChoices.filter((type) => type.old === def.refType).pop();
    memberObject.name = def.name;
    memberObject.type = defConfig['new'];
    if (defConfig['parent'] && def['parent']) {
      memberObject.parent = def['parent'];
    }

    tree.children.push(memberObject);
  }
 }

export function ConvertEntryToDefJson(tree: any, output: any = {}, layer: number = 0) {
  if (layer === 0) {
    output.tree = {};
    output.entries = [];
  }
  if (tree.type === 'object') {
    const value = tree.value;
    output.tree.name = value.name;

    output.tree.type = 'object';
    output.tree.children = value.children
                                .map((e) => {
                                  const obj = {
                                    entries: [],
                                    tree : {},
                                  };
                                  ConvertEntryToDefJson(e, obj, layer + 1);
                                  ([]).push.apply(output.entries, obj.entries);
                                  return obj.tree;
                                });
  } else if (tree.type === 'member') {
    const value = tree.value;
    output.tree = value.leaf;
    delete value.leaf;
    output.entries.push(value);
  }
    console.log('Tree', tree.value , 'Out tree', output.tree);
}
export function CreateEntry(tree = <any>{}, entries = <any>[], layer: number = 0) {
  const mainEntry = <Entry>{
    name : tree.name,
    layer
  };

  if (tree.type === 'object') {
    mainEntry.type = 'object';
    const children = tree.children.map((e) => CreateEntry(e, entries, layer + 1));
    const dir = new Dir(tree.type,
                        tree.name,
                        children);
    mainEntry.value = dir;
  } else {
    const entry = findEntryByName(tree.name, entries);
    if (entry) {
      mainEntry.type = 'member';
      const leaf = <Leaf> {
        type : tree.type,
        name : tree.name,
        parent : tree.parent
      };
      const member = new Member(entry.name,
                                entry.pattern,
                                entry.from,
                                leaf);
      mainEntry.value = member;
    }
  }
  return mainEntry;
}

function findEntryByName(name, entriesArr) {
  for (const entry of entriesArr) {
    if (entry.name === name) {
      return entry;
    }
  }
}
