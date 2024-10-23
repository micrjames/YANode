export interface YANode<T> {
   Key: T;
   next?: YANode<T>;
   parent?: YANode<T>;
   children?: Array<YANode<T>>;
}
