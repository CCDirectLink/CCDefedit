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

export function cloneEntry(oldEntry) {
  console.log(oldEntry);
  return {type : oldEntry.type,
          name: oldEntry.name,
          layer: oldEntry.layer,
          value : oldEntry.value.clone(),
          expanded : oldEntry.expanded
  };
}
function search(result, node, parent) {
  switch (node.type) {
    case 'object': {
      const childNode = {
        type: 'object',
        name: node.name,
        children: []
      };
      parent.children.push(childNode);
      for (const child of node.members) {
        search(result, child, childNode);
      }
    }
    break;
    case 'member': {
      switch (node.refType) {
        case 'var': {
          const childNode = {
            type: 'static',
            name: node.name,
            parent: node.parent
          };
          parent.children.push(childNode);
          addEntry(result, node);
        }
        break;
        case 'raw': {
          const childNode = {
            type: 'raw',
            name: node.name
          };
          parent.children.push(childNode);
          addEntry(result, node);
        }
        break;
        case 'ref': {
          const childNode = {
            type: 'dynamic',
            name: node.name,
            parent: node.parent
          };
          parent.children.push(childNode);
          addEntry(result, node);
        }
        break;
      }
    }
    break;
  }
}
function addEntry(result, node) {
  result.entries.push({
    type: 'select',
    name: node.name,
    pattern: node.compiled.pattern,
    from: node.compiled.from
  });
}
export function ConvertFromOldDefJson(old) {
  const result = {
    entries: [],
    tree: {
      type: 'object',
      name: old.name,
      children: []
    }
  };
  for (const child of old.members) {
    search(result, child, result.tree);
  }
  return result;
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
