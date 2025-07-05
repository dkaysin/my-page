const IUM = ({ renderRef }) => {
  return (
    <>
      // Proof-based math courses from professors of leading Moscow{" "}
      {renderRef("math departments", "math_departments")}<br />
      {renderRef("Linear Algebra and Geometry", "linear_algebra_and_geometry")},&#32;
      {renderRef("Analysis 1-2", "analysis_1_2")},<br />
      {renderRef("Analysis on Manifolds", "analysis_on_manifolds")},&#32;
      {renderRef("Complex Analysis", "complex_analysis")},<br />
      {renderRef("Algebra 1-2", "algebra_1_2")},&#32;
      {renderRef("Lie Groups and Lie Algebras", "lie_groups_and_lie_algebras")},<br />
      {renderRef("Topology 1-2", "topology_1_2")},&#32;
      {renderRef("Topology 3", "topology_3")},&#32;
      {renderRef("Differential Geometry", "differential_geometry")},<br />
      {renderRef("Advanced Topics in Topology of Surfaces", "topology_of_surfaces",)},&#32;
      {renderRef("Mapping Class Groups", "mapping_class_groups")},<br />
      {renderRef("Surfaces of Infinite Type", "surfaces_of_infinite_type")},&#32;
      {renderRef("Coarse Geometry", "coarse_geometry")},<br />
      {renderRef("Intro to Algebraic Number Theory", "intro_to_algebraic_number_theory")},<br />
      {renderRef("Category Theory", "category_theory")},&#32;
      {renderRef("Probability Theory", "probability_theory")}
    </>
  );
};

export default IUM;
