window.SIDEBAR_ITEMS = {"constant":[["RESERVED_NAMES",""]],"enum":[["CellType","The type for a Cell"],["Control","Control AST nodes."],["Direction","Direction of a port on a cell."],["FlatGuard",""],["Guard","An assignment guard which has pointers to the various ports from which it reads."],["PortComp","Comparison operations that can be performed between ports by [Guard::CompOp]."],["PortParent","Ports can come from Cells or Groups"],["Width","Represents an abstract width of a primitive signature."]],"mod":[["from_ast","Module to transform AST programs into IR."],["rewriter",""],["traversal","Visitor to traverse a control program."]],"struct":[["Assignment","Represents a guarded assignment in the program"],["Attributes","Attributes associated with a specific IR structure."],["BackendConf","Configuration information for the backends."],["Builder","IR builder. Uses internal references to the component to construct and validate constructs when needed. By default, assumes that the cells are being added by a pass and marks them with the `@generated` attribute."],["Canonical","Canonical name of a Port"],["Cell","Represents an instantiated cell."],["Cloner","Implement cloning operations on control statements. We implement these separatily from the [Clone] trait because cloning trait is not very common and clones should be explicit."],["CombGroup","A combinational group. A combinational group does not have any holes and should only contain assignments that should will be combinationally active"],["Component","In memory representation of a Component."],["Context","The IR Context that represents an entire Calyx program with all of its imports and dependencies resolved."],["Empty","Data for the `empty` control statement."],["Enable","Data for the `enable` control statement."],["Group","A Group of assignments that perform a logical action."],["GuardPool","A `GuardPool` is an “arena”-style storage area for `FlatGuard`s."],["GuardRef",""],["Id","Represents an identifier in a Calyx program"],["IdList","A wrapper struct exposing an ordered collection of named entities within an RRC with deterministic iteration and constant-time look-up on names directly. The struct assumes that the name of an entity cannot change. Doing so will introduce incorrect results for look-ups."],["If","Data for the `if` control statement."],["Invoke","Data for an `invoke` control statement."],["LibrarySignatures","A representation of all the primitive definitions found while parsing the root program."],["Par","Data for the `par` control statement."],["Port","Represents a port on a cell."],["PortDef","Definition of a port parameterized by a width type. Ports on Primitives can be parameteris and use [Width]. Ports on Components cannot be parameterized and therefore use `u64`."],["PortIterator","Wraps generic iterators over ports to allow functions to build and return port iterators in different ways."],["Primitive","Representation of a external primitive definition."],["Printer","Printer for the IR."],["Seq","Data for the `seq` control statement."],["StaticEnable","Data for the `enable` control for a static group."],["StaticGroup","A Group of assignments that perform a logical action."],["WRC","A Wrapper for a weak RefCell pointer. Used by parent pointers in the internal representation."],["While","Data for the `if` control statement."]],"trait":[["CloneName","A utility trait representing the ability to clone the name of an object. Automatically definied for anything that implements GetName"],["GetAttributes","Structs that can return an [`Attributes`] instance."],["GetName","A trait representing something in the IR that has a name."]],"type":[["Binding","Alias for bindings"],["RRC","Alias for a RefCell contained in an Rc reference."]]};