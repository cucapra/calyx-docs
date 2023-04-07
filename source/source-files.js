var sourcesIndex = JSON.parse('{\
"calyx_frontend":["",[],["ast.rs","attribute.rs","common.rs","lib.rs","parser.rs","workspace.rs"]],\
"calyx_ir":["",[],["builder.rs","common.rs","component.rs","context.rs","control.rs","flat_guard.rs","from_ast.rs","guard.rs","lib.rs","macros.rs","printer.rs","reserved_names.rs","rewriter.rs","structure.rs"]],\
"calyx_opt":["",[["analysis",[["domination_analysis",[],["dominator_map.rs","mod.rs","node_analysis.rs"]]],["compute_static.rs","control_id.rs","control_order.rs","control_ports.rs","dataflow_order.rs","graph.rs","graph_coloring.rs","live_range_analysis.rs","mod.rs","port_interface.rs","reaching_defns.rs","read_write_set.rs","schedule_conflicts.rs","share_set.rs","static_par_timing.rs","variable_detection.rs"]],["passes",[["top_down_static_timing",[],["compute_states.rs","mod.rs","normalize.rs","tdst.rs"]]],["canonical.rs","cell_share.rs","clk_insertion.rs","collapse_control.rs","comb_prop.rs","compile_empty.rs","compile_invoke.rs","compile_ref.rs","compile_static.rs","compile_sync.rs","component_iniliner.rs","dead_assignment_removal.rs","dead_cell_removal.rs","dead_group_removal.rs","dump_ports.rs","externalize.rs","go_insertion.rs","group_to_invoke.rs","group_to_seq.rs","hole_inliner.rs","infer_share.rs","infer_static_timing.rs","lower_guards.rs","math_utilities.rs","merge_assign.rs","merge_static_par.rs","mod.rs","papercut.rs","par_to_seq.rs","register_unsharing.rs","remove_comb_groups.rs","remove_ids.rs","reset_insertion.rs","static_par_conv.rs","synthesis_papercut.rs","top_down_compile_control.rs","unroll_bound.rs","well_formed.rs","wire_inliner.rs"]],["traversal",[],["action.rs","mod.rs","post_order.rs","visitor.rs"]]],["default_passes.rs","lib.rs","pass_manager.rs"]],\
"calyx_utils":["",[],["errors.rs","id.rs","lib.rs","math.rs","measure_time.rs","namegenerator.rs","out_file.rs","position.rs","weight_graph.rs"]]\
}');
createSourceSidebar();
