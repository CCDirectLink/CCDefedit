import Subcondition from './subcondition';
export default interface MemberEntry {
  type: string;
  pattern: string;
  from: {
	  type : string;
	  values: Subcondition[];
  };
}