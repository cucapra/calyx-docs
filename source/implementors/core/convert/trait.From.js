(function() {var implementors = {};
implementors["calyx"] = [{"text":"impl&lt;const INVOKE_MAP:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"enum\" href=\"calyx/ir/enum.Control.html\" title=\"enum calyx::ir::Control\">Control</a>&gt; for <a class=\"struct\" href=\"calyx/analysis/struct.ControlPorts.html\" title=\"struct calyx::analysis::ControlPorts\">ControlPorts</a>&lt;INVOKE_MAP&gt;","synthetic":false,"types":["calyx::analysis::control_ports::ControlPorts"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"calyx/ir/struct.Group.html\" title=\"struct calyx::ir::Group\">Group</a>&gt; for <a class=\"struct\" href=\"calyx/analysis/struct.GraphAnalysis.html\" title=\"struct calyx::analysis::GraphAnalysis\">GraphAnalysis</a>","synthetic":false,"types":["calyx::analysis::graph::GraphAnalysis"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"calyx/ir/struct.Component.html\" title=\"struct calyx::ir::Component\">Component</a>&gt; for <a class=\"struct\" href=\"calyx/analysis/struct.GraphAnalysis.html\" title=\"struct calyx::analysis::GraphAnalysis\">GraphAnalysis</a>","synthetic":false,"types":["calyx::analysis::graph::GraphAnalysis"]},{"text":"impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;C&gt; for <a class=\"struct\" href=\"calyx/analysis/struct.GraphColoring.html\" title=\"struct calyx::analysis::GraphColoring\">GraphColoring</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;,&nbsp;</span>","synthetic":false,"types":["calyx::analysis::graph_coloring::GraphColoring"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"enum\" href=\"calyx/ir/enum.Control.html\" title=\"enum calyx::ir::Control\">Control</a>&gt; for <a class=\"struct\" href=\"calyx/analysis/struct.ScheduleConflicts.html\" title=\"struct calyx::analysis::ScheduleConflicts\">ScheduleConflicts</a>","synthetic":false,"types":["calyx::analysis::schedule_conflicts::ScheduleConflicts"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"struct\" href=\"calyx/errors/struct.Error.html\" title=\"struct calyx::errors::Error\">Error</a>","synthetic":false,"types":["calyx::errors::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/pest/pest/error/struct.Error.html\" title=\"struct pest::error::Error\">Error</a>&lt;<a class=\"enum\" href=\"calyx/frontend/parser/enum.Rule.html\" title=\"enum calyx::frontend::parser::Rule\">Rule</a>&gt;&gt; for <a class=\"struct\" href=\"calyx/errors/struct.Error.html\" title=\"struct calyx::errors::Error\">Error</a>","synthetic":false,"types":["calyx::errors::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"calyx/errors/struct.Error.html\" title=\"struct calyx::errors::Error\">Error</a>","synthetic":false,"types":["calyx::errors::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;T&gt;&gt;&gt; for <a class=\"struct\" href=\"calyx/ir/struct.WRC.html\" title=\"struct calyx::ir::WRC\">WRC</a>&lt;T&gt;","synthetic":false,"types":["calyx::ir::common::WRC"]},{"text":"impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;F&gt; for <a class=\"struct\" href=\"calyx/ir/struct.IdList.html\" title=\"struct calyx::ir::IdList\">IdList</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"calyx/ir/trait.GetName.html\" title=\"trait calyx::ir::GetName\">GetName</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"type\" href=\"calyx/ir/type.RRC.html\" title=\"type calyx::ir::RRC\">RRC</a>&lt;T&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["calyx::ir::component::IdList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"calyx/ir/struct.Primitive.html\" title=\"struct calyx::ir::Primitive\">Primitive</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.tuple.html\">)</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"calyx/ir/struct.LibrarySignatures.html\" title=\"struct calyx::ir::LibrarySignatures\">LibrarySignatures</a>","synthetic":false,"types":["calyx::ir::context::LibrarySignatures"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;<a class=\"struct\" href=\"calyx/ir/struct.Port.html\" title=\"struct calyx::ir::Port\">Port</a>&gt;&gt;&gt; for <a class=\"enum\" href=\"calyx/ir/enum.Guard.html\" title=\"enum calyx::ir::Guard\">Guard</a>","synthetic":false,"types":["calyx::ir::guard::Guard"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"calyx/ir/struct.Id.html\" title=\"struct calyx::ir::Id\">Id</a>","synthetic":false,"types":["calyx::ir::id::Id"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"calyx/ir/struct.Id.html\" title=\"struct calyx::ir::Id\">Id</a>","synthetic":false,"types":["calyx::ir::id::Id"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"calyx/ir/struct.Id.html\" title=\"struct calyx::ir::Id\">Id</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.u64.html\">u64</a>, <a class=\"enum\" href=\"calyx/ir/enum.Direction.html\" title=\"enum calyx::ir::Direction\">Direction</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"calyx/ir/struct.PortDef.html\" title=\"struct calyx::ir::PortDef\">PortDef</a>","synthetic":false,"types":["calyx::ir::primitives::PortDef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"calyx/ir/enum.Guard.html\" title=\"enum calyx::ir::Guard\">Guard</a>&gt; for Expr&lt;<a class=\"enum\" href=\"calyx/ir/enum.Guard.html\" title=\"enum calyx::ir::Guard\">Guard</a>&gt;","synthetic":false,"types":["boolean_expression::expr::Expr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Expr&lt;<a class=\"enum\" href=\"calyx/ir/enum.Guard.html\" title=\"enum calyx::ir::Guard\">Guard</a>&gt;&gt; for <a class=\"enum\" href=\"calyx/ir/enum.Guard.html\" title=\"enum calyx::ir::Guard\">Guard</a>","synthetic":false,"types":["calyx::ir::guard::Guard"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"calyx/utils/struct.BoolIdx.html\" title=\"struct calyx::utils::BoolIdx\">BoolIdx</a>","synthetic":false,"types":["calyx::utils::weight_graph::BoolIdx"]},{"text":"impl&lt;T, C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;C&gt; for <a class=\"struct\" href=\"calyx/utils/struct.WeightGraph.html\" title=\"struct calyx::utils::WeightGraph\">WeightGraph</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;,&nbsp;</span>","synthetic":false,"types":["calyx::utils::weight_graph::WeightGraph"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()