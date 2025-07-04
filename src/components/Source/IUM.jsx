const IUM = ({ renderRef }) => {
  return (
    <>
      // Proof-based math courses from professors of leading Moscow {renderRef("math departments", "math_departments")}<br />
      {renderRef("Linear Algebra and Geometry", "linear_algebra_and_geometry")},&#32;
      {renderRef("Analysis 1-2", "analysis_1_2")},&#32;
      {renderRef("Analysis on Manifolds", "analysis_on_manifolds")},&#32;
      {renderRef("Algebra 1-2", "algebra_1_2")},&#32;
      {renderRef("Topology 1-2", "topology_1_2")},&#32;
      {renderRef("Topology 3", "topology_3")},&#32;
      {renderRef("Differential Geometry", "differential_geometry")}
    </>
  );
};

export default IUM;
