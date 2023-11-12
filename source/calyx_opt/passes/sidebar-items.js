window.SIDEBAR_ITEMS = {"struct":[["AddGuard",""],["AttributePromotion","Removes NODE_ID, BEGIN_ID, and END_ID from each control statement"],["Canonicalize","Perform serval canonicalizations on the program."],["CellShare","Given a [LiveRangeAnalysis] that specifies the “share” and “state_share” cells alive at each group, minimizes the cells used for each component."],["ClkInsertion","Adds assignments from a components `clk` port to every component that contains an input `clk` port."],["CollapseControl","Collapses and de-nests control constructs."],["CombProp","Propagate unconditional reads and writes from wires."],["CompileEmpty","Compiles away all `ir::Empty` statements into an `ir::Enable`."],["CompileInvoke","Compiles [`ir::Invoke`] statements into an [`ir::Enable`] that runs the invoked component."],["CompileRepeat","Compiles `ir::Invoke` statements into an `ir::Enable` that runs the invoked component."],["CompileStatic","Compiles Static Islands"],["CompileStaticInterface",""],["CompileSync","loop through all control statements under “par” block to find # barriers needed and # members of each barrieradd all cells and groups neededloop through all control statements, find the statements with @sync attribute and replace them with seq { ; incr_barrier_0_; write_barrier_0_; wait_; restore_; } or seq { ; incr_barrier__; write_barrier__; wait_; wait_restore_; }"],["CompileSyncWithoutSyncReg","Compiles @sync without use of std_sync_reg Upon encountering @sync, it first instantiates a std_reg(1) for each thread(`bar`) and a std_wire(1) for each barrier (`s`) It then continuously assigns the value of (`s.in`) to 1’d1 guarded by the expression that all values of `bar` for threads under the barrier are set to 1’d1 Then it replaces the @sync control operator with seq { barrier; clear; } `barrier` simply sets the value of `bar` to 1’d1 and then waits for `s.out` to be up `clear` resets the value of `bar` to 1’d0 for reuse of barrier Using this method, each thread only incurs 3 cycles of latency overhead for the barrier, and we theoretically won’t have a limit for number of threads under one barrier"],["ComponentInliner","Inlines all sub-components marked with the `@inline` attribute. Cannot inline components when they:"],["DataPathInfer","Infers `@control` and `@data` annotations for cells. A cell marked with `@data` can have `'x` assignments to its `@data` ports which enables downstream optimizations."],["DeadAssignmentRemoval","Removes unused assigns from groups. Analyzes the writes to combinational cells in groups In order for a combinational cell to be considered “used”, it must:"],["DeadCellRemoval","Removes unused cells from components."],["DeadGroupRemoval","Removes unused groups and combinational groups from components. A group is considered in use when it shows up in an [ir::Enable]. A combinational group is considered in use when it is a part of an [ir::If] or [ir::While] or [ir::Invoke]."],["DiscoverExternal","A pass to detect cells that have been inlined into the top-level component and turn them into real cells marked with [ir::BoolAttr::External]."],["Externalize","Externalize input/output ports for cells marked with the `@external(1)` attribute. The ports of these cells are exposed through the ports of the parent component."],["GoInsertion","Add the group’s `go` signal into the guards of all non-hole assignments of this group."],["GroupToInvoke","Transform groups that are structurally invoking components into equivalent [ir::Invoke] statements."],["GroupToSeq","Transforms a group into a seq of 2 smaller groups, if possible. Currently, in order for a group to be transformed must"],["HoleInliner","Removes all groups and inlines reads and writes from holes."],["InferShare","This pass checks if components are (state) shareable. Here is the process it goes through: if a component uses any ref cells, or non-shareable cells then it is automatically not shareable. Otherwise, check if each read of a stateful cell is guaranteed to be dominated by a write to the same cell– we check this by building a domination map. If so, component is state shareable."],["LowerGuards","Lowers guards into a purely structural representation. After this pass, all guards are guaranteed to be either [ir::Guard::True] or [ir::Guard::Port]."],["MergeAssign","Merge assignments of the form with the same (dst_port, src_port) pairs."],["Papercut","Pass to check for common errors such as missing assignments to `done` holes of groups."],["ParToSeq","Transforms all `par` into `seq`. Uses [analysis::ControlOrder] to get a sequentialization of `par` such that the program still computes the same value. When there is no such sequentialization, errors out."],["RegisterUnsharing","Unsharing registers reduces the amount of multiplexers used in the final design, trading them off for more memory."],["RemoveIds","Removes NODE_ID, BEGIN_ID, and END_ID from each control statement"],["ResetInsertion","Adds assignments from a components `reset` port to every component that contains an input `reset` port."],["ScheduleCompaction","for static seqs that are statically promoted by the compiler, aggressively compacts the execution schedule so that the execution order of control operators still respects data dependency Example: see tests/passes/schedule-compaction/schedule-compaction.rs"],["SimplifyStaticGuards","Simplifies Static Guards In particular if g = g1 & g2 & …gn, then it takes all of the g_i’s that are “static timing intervals”, e.g., %[2:3], and combines them into one timing interval. For example: (port.out | !port1.out) & (port2.out == port3.out) & %[2:8] & %[5:10] ? becomes (port.out | !port1.out) & (port2.out == port3.out) & %[5:8] ? by “combining” %[2:8] & %[5:10]"],["SimplifyWithControl","Transforms combinational groups into normal groups by registering the values read from the ports of cells used within the combinational group."],["StaticInliner",""],["StaticPromotion","Infer “promote_static” annotation for groups and promote control to static when (conservatively) possible."],["SynthesisPapercut","Pass to check common synthesis issues."],["TopDownCompileControl","Core lowering pass. Compiles away the control programs in components into purely structural code using an finite-state machine (FSM)."],["TopDownStaticTiming","Core Lowering Pass: Generates latency-sensitive FSMs when control sub-programs have `@static`. Must be invoked for programs that need to use cycle-level reasoning. Expects that combinational groups and invoke statements have been compiled away."],["UnrollBounded","Fully unroll all `while` loops with a given `@bound`."],["WellFormed","Pass to check if the program is well-formed."],["WireInliner","Alternate hole inliner that removes groups and group holes by instantiating wires that hold the value for each signal."],["WrapMain","If the top-level component is not named `main`, adds a new `main` component and makes it the top-level component. This is useful because a lot of our tools rely on the name `main` being the design under test (DUT)."]]};