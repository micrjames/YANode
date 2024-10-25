export interface YANode<T> {
   Key: T;
   next?: YANode<T>;
   _parent?: YANode<T>;
   _children?: Array<YANode<T>>;
}
