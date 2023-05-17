window.SIDEBAR_ITEMS = {"mod":[["reaching_defns","Calculate the reaching definitions in a control program."]],"struct":[["ControlId","Adding “NODE_ID”, “BEGIN_ID”, and “END_ID” attribute to control statement"],["ControlOrder","Extract the dependency order of a list of control programs. Dependencies are defined using read/write sets used in the control program. The read/write sets ignore ports on constants and ThisComponent."],["ControlPorts","Contains a mapping from name of [ir::CombGroup] to the ports read by the control program as well as the mapping from invoke statements to the port mappings. The vector of ports is guaranteed to only contain unique ports."],["DataflowOrder","Given a set of assignment, generates an ordering that respects combinatinal dataflow."],["DominatorMap","Builds a Domination Map for the control program. It maps nodes to sets of nodes. Here is what is included as a “node” in the domination map:"],["GraphAnalysis","Constructs a graph based representation of a component. Each node represents a `ir::Port` and each directed edge (`X -> Y`) means that `X`’s value written to `Y`."],["GraphColoring","Defines a greedy graph coloring algorithm over a generic conflict graph."],["LiveRangeAnalysis","This analysis implements a parallel version of a classic liveness analysis. For each group or invoke, it returns a list of the state shareable cells that are “alive” during an execution of a group or invoke statement (we identify an invoke statement by the cell that is being invoked, and groups by the name of the group)."],["PortInterface","Helper methods to parse `@read_together` and `@write_together` specifications"],["ReadWriteSet","Calcuate the reads-from and writes-to set for a given set of assignments."],["ScheduleConflicts","A conflict graph that describes which nodes (i.e. groups/invokes) are being run in parallel to each other."],["ShareSet","Stores a Hashset that contains the type names of all components and primitives marked with either “share” or “state_share”,depending on what the user wants. Methods implemented by this struct can be used to determine whether a given cell is shareable or not Used by `live_range_analysis.rs`, `cell_share.rs`, and `infer_share.rs`"],["StaticParTiming","Calculate live ranges across static par blocks. Assumes control ids have already been given; it does not add its own"],["VariableDetection","Detects if a group is solely being used to update a register."]],"trait":[["IntoStatic",""],["WithStatic","Trait to propagate and extra “static” attributes through [ir::Control]. Calling the update function ensures that the current program, as well as all sub-programs have a “static” attribute on them. Usage:"]]};