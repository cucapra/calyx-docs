initSidebarItems({"mod":[["reaching_defns","Calculate the reaching definitions in a control program."]],"struct":[["ControlPorts","Contains a mapping from name of [ir::CombGroup] to the ports read by the control program as well as the mapping from invoke statements to the port mappings. The vector of ports is guaranteed to only contain unique ports."],["DataflowOrder","Given a set of assignment, generates an ordering that respects combinatinal dataflow."],["GraphAnalysis","Constructs a graph based representation of a component. Each node represents a `ir::Port` and each directed edge (`X -> Y`) means that `X`’s value is read in an assignment to `Y`."],["GraphColoring","Defines a greedy graph coloring algorithm over a generic conflict graph."],["LiveRangeAnalysis","This analysis implements a parallel version of a classic liveness analysis. For each group, it returns a list of the registers that are “alive” during an execution of a group."],["PortInterface","Helper methods to parse `@read_together` and `@write_together` specifications"],["ReadWriteSet","Calcuate the reads-from and writes-to set for a given set of assignments."],["ScheduleConflicts","A conflict graph that describes which groups are being run in parallel to each other."],["VariableDetection","Detects if a group is solely being used to update a register."]]});