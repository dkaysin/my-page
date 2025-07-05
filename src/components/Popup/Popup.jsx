import "./Popup.css";
import { useMediaQuery } from "react-responsive";

const popupDict = {
  tbd: () => {
    return <span>Description will be added later ;)</span>;
  },

  math_departments: () => {
    return (
      // Math departments
      <>
        <p>HSE Faculty of Mathematics (Матфак ВШЭ)</p>
        <p>MSU Faculty of Mechanics and Mathematics (Мехмат МГУ)</p>
      </>
    );
  },
  linear_algebra_and_geometry: () => {
    return (
      // Linear algenra and geometry
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/484619">
            Yuri M. Burman
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Vector spaces</span>: abstract linear
          and affine spaces, dual space, linear maps;
        </p>
        <p>
          <span className="keywordOrange">Affine geometry</span>: barycentric
          coordinates, simplicies, action of linear and affine groups, convex
          sets, Helly's theorem, Carathéodory's theorem;
        </p>
        <p>
          <span className="keywordOrange">Projective geometry</span>: projective
          linear group, cross-ratio, Möbius group, Desargues's theorem;
        </p>
        <p>
          <span className="keywordOrange">Euclidean spaces</span>: determinant,
          Cramer's rule, bilinear and quadratic forms, Cauchy-Schwarz
          inequality, triangle inequality, Gram-Schmidt process.
        </p>
      </>
    );
  },
  algebra_1_2: () => {
    return (
      // Algebra 1-2
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/451657">
            Alexey L. Gorodentsev
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Elements of combinatorics</span>:
          binomial and multinomial coefficients, partitions of a set, Young
          tableaus
        </p>
        <p>
          <span className="keywordOrange">Groups</span>: homomorphisms, group
          actions, orbit-stabilizer theorem, Sylow theorems, Jordan-Hölder
          theorem, free groups;{" "}
        </p>
        <p>
          <span className="keywordOrange">Commutative rings</span>: ideals,
          quotient rings, prime ideals, maximal ideals, principal ideal domains,
          unique factorization domains, rings ℤ/(n) and 𝕜[x]/(f), Chinese
          remainder theorem;
        </p>
        <p>
          <span className="keywordOrange">Fields</span>: field extensions,
          complex numbers, finite fields, fields of fractions, Laurent series,
          rational functions;
        </p>
        <p>
          <span className="keywordOrange">Modules over commutative rings</span>:
          generators and relations, free modules, matrices, associative
          algebras, determinant, Grassman algebra, Cramer’s rule,
          Cayley-Hamilton theorem, Smith normal form, classification of finitely
          generated modules over PIDs;
        </p>
        <p>
          <span className="keywordOrange">Vector spaces</span>: characteristic
          and minimal polynomials, nilpotent operators, eigenvalues and
          eigenspaces, Jordan normal form, rational canonical form, bilinear and
          quadratic forms, hermitian spaces, singular value decomposition;{" "}
        </p>
      </>
    );
  },
  analysis_1_2: () => {
    return (
      // Analysis 1-2
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/104695101">
            Stanislav V. Shaposhnikov
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Foundations</span>: sets, relations,
          functions, Cantor–Bernstein theorem, well-ordered sets, induction,
          Zorn's lemma;
        </p>
        <p>
          <span className="keywordOrange">Metric spaces</span>: field ℝ, axiom
          of completeness, sequences, limits, series, Cauchy sequences, Baire
          category theorem, compactness, Hausdorff spaces;
        </p>
        <p>
          <span className="keywordOrange">
            Continuity and differentiation in ℝ
          </span>
          : pointwise and uniform convergence, Brouwer fixed-point theorem,
          differentiable functions, theorems of Rolle, Lagrange, Cauchy, mean
          value theorem, L'Hospital's rule, Taylor series;
        </p>
        <p>
          <span className="keywordOrange">Normed spaces</span>: bounded linear
          functionals, Hahn–Banach theorem, Fréchet and Gateaux derivatives,
          implicit function theorem, inverse function theorem, Riemann integral;
        </p>
        <p>
          <span className="keywordOrange">Measure theory</span>: σ-algebras,
          measurable function and sets, convergence a.e. and in measure,
          Lebesgue integral, Fubini's theorem, Radon–Nikodym theorem.
        </p>
      </>
    );
  },
  topology_1_2: () => {
    return (
      // Topology 1-2
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/484619">
            Yuri M. Burman
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Point-set topology</span>: continuity,
          homeomorphisms, Hausdorff spaces, connectedness and path
          connectedness, compactness, metric spaces, product topology, quotient
          topology;
        </p>
        <p>
          <span className="keywordOrange">Homotopy</span>: homotopy category and
          functoriality, fundamental group, covering spaces, fundamental group
          of CW-complexes;{" "}
        </p>
        <p>
          <span className="keywordOrange">Homology</span>: simplicial and
          singular complexes and their homology, chain homotopy, snake lemma,
          exact sequences, Mayer–Vietoris sequence, cellular homology,
          orientability of manifolds, degree of a continuous mapping;{" "}
        </p>
        <p>
          <span className="keywordOrange">Cohomology</span>: basic properties,
          cup product, Künneth theorem.{" "}
        </p>
      </>
    );
  },
  topology_3: () => {
    return (
      // Topology 3
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/14061554/">
            Taras E. Panov
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Poincaré duality</span>: topological
          and smooth manifolds, local homology groups, orientation, fundamental
          class, cohomology with compact supports, duality isomorphisms,
          connection with cohomological multiplication, signature of manifold;
        </p>
        <p>
          <span className="keywordOrange">Vector bundles</span>: locally trivial
          bundles, tangent and normal bundles, Grassmann manifolds, Plücker
          embedding, Schubert cells, classification of vector bundles;
        </p>
        <p>
          <span className="keywordOrange">Characteristic classes</span>:
          Stiefel-Whitney and Chern classes, Leray-Hirsch theorem, splitting
          principle, flag manifolds, cohomology of Grassmann manifolds,
          parallelizability of real projective spaces, division algebras,
          obstructions to embeddings and immersions;
        </p>
        <p>
          <span className="keywordOrange">Euler and Thom classes</span>:
          orientable vector bundles, Thom class and Thom isomorphism, Euler
          class and its properties, connection with Poincaré duality and Euler
          characteristic.
        </p>
      </>
    );
  },
  analysis_on_manifolds: () => {
    return (
      // Analysis on manifolds
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/104695101">
            Stanislav V. Shaposhnikov
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Fundamentals</span>: surfaces in
          Euclidean space and manifolds with and without boundary, tangent
          space, orientation;
        </p>
        <p>
          <span className="keywordOrange">Smooth maps</span>: differentials,
          Whitney embedding theorem, Sard's theorem, degree of smooth map;
        </p>
        <p>
          <span className="keywordOrange">Vector fields</span>: derivations,
          vector flow, commutator of vector fields, Lie derivative, Lie groups
          and algebras;
        </p>
        <p>
          <span className="keywordOrange">Hausdorff measure</span>:
          construction, surface integral, integration by parts;
        </p>
        <p>
          <span className="keywordOrange">Differential forms</span>: exterior
          product and exterior derivative, pullbacks, closed and exact
          differential forms, Poincaré's lemma, Stokes' theorem.
        </p>
      </>
    );
  },
  differential_geometry: () => {
    return (
      // Differential geometry
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/95704482/">
            Alexey V. Penskoy
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Curves and surfaces</span>: curvature,
          torsion, Frenet frames, first and second quadratic forms, principal
          curvatures, mean and Gaussian curvature, Euler's formula,
          Gauss-Weingarten equations, Gauss-Bonnet theorem;
        </p>
        <p>
          <span className="keywordOrange">Vector bundles</span>: structure
          groups, Euclidean and Hermitian bundles, natural operations,
          orientability;
        </p>
        <p>
          <span className="keywordOrange">Connections</span>: local forms,
          Christoffel symbols, curvature in vector and principal bundles, metric
          connections, Levi-Civita connection;
        </p>
        <p>
          <span className="keywordOrange">Riemannian manifolds</span>: torsion,
          curvature tensor, Ricci tensor, scalar curvature, geodesics, geodesic
          coordinates, submanifolds;
        </p>
        <p>
          <span className="keywordOrange">Characteristic classes</span>:
          Chern-Weil construction, Chern, Pontryagin and Euler classes, Chern
          character, Thom class, Gauss-Bonnet theorem.
        </p>
      </>
    );
  },
  lie_groups_and_lie_algebras: () => {
    return (
      // Lie groups and lie algebras
      <>
        <p> Lecturer: Karine G. Kuyumjiyan </p>
        <p>
          <span className="keywordOrange">Fundamentals</span>: definitions,
          examples, subgroups, homomorphisms, quotient groups, one-parameter
          subgroups, exponential map;
        </p>
        <p>
          <span className="keywordOrange">Smooth manifolds</span>: atlas,
          tangent spaces, differential forms;
        </p>
        <p>
          <span className="keywordOrange">Lie algebras</span>: bracket
          operations, adjoint representation, derivations, automorphisms;
        </p>
        <p>
          <span className="keywordOrange">Classical groups and algebras</span>:
          orthogonal, unitary, symplectic, special linear groups, structure
          constants, Cartan-Killing form;
        </p>
        <p>
          <span className="keywordOrange">Root systems</span>: Weyl groups,
          Dynkin diagrams, weight spaces;
        </p>
        <p>
          <span className="keywordOrange">Representation theory</span>:
          irreducible representations, Schur's lemma, highest weight
          representations.
        </p>
      </>
    );
  },
  probability_theory: () => {
    return (
      // Probability theory
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="https://www.hse.ru/en/org/persons/104695101">
            Stanislav V. Shaposhnikov
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Discrete probability</span>: discrete
          probability spaces, conditional probability, independent events, law
          of total probability, Bayes' formula;
        </p>
        <p>
          <span className="keywordOrange">
            Probability measures and random variables
          </span>
          : probability measures, random variables, distribution functions,
          Lebesgue extension theorem, Kolmogorov consistency theorem;
        </p>
        <p>
          <span className="keywordOrange">Mathematical expectation</span>:
          mathematical expectation, change of variables formula, Fubini's
          theorem, variance and covariance;
        </p>
        <p>
          <span className="keywordOrange">Characteristic functions</span>;
        </p>
        <p>
          <span className="keywordOrange">Gaussian distribution</span>;
        </p>
        <p>
          <span className="keywordOrange">Convergence of sequences</span>:
          convergence of sequences and series of independent random variables,
          zero-one laws, law of large numbers;
        </p>
        <p>
          <span className="keywordOrange">Weak convergence</span>: weak
          convergence of probability measures, Prokhorov's theorem, Kantorovich
          metric;
        </p>
        <p>
          <span className="keywordOrange">Central limit theorem</span>: central
          limit theorem, Lindeberg's condition, Lyapunov's theorem;
        </p>
        <p>
          <span className="keywordOrange">Conditional expectation</span>:
          conditional mathematical expectation and its properties, martingales.
        </p>
      </>
    );
  },
  complex_analysis: () => {
    return (
      // Complex analysis
      <>
        <p>
          {" "}
          Lecturer:{" "}
          <a href="http://new.math.msu.su/tffa/persons/beloshapka_full.html">
            Valery K. Beloshapka
          </a>{" "}
        </p>
        <p>
          <span className="keywordOrange">Complex differentiation</span>:
          C-differentiability vs R-differentiability, complex implicit and
          inverse function theorems;
        </p>
        <p>
          <span className="keywordOrange">Conformal mappings</span>:
          conformality and C-differentiability, automorphism groups, Schwarz
          lemma;
        </p>
        <p>
          <span className="keywordOrange">Integration and Cauchy theory</span>:
          line integrals, Cauchy's integral theorem and formula, Goursat's
          lemma;
        </p>
        <p>
          <span className="keywordOrange">Holomorphic functions</span>: Taylor
          series, Cauchy inequalities, Liouville's theorem, maximum principle,
          uniqueness theorem, Morera's theorem;
        </p>
        <p>
          <span className="keywordOrange">
            Laurent series and singularities
          </span>
          : Laurent expansion, classification of isolated singularities, residue
          theorem, argument principle, Rouché's theorem;
        </p>
        <p>
          <span className="keywordOrange">Analytic continuation</span>:
          continuation along paths, uniqueness theorems, multivalued functions,
          Puiseux series;
        </p>
        <p>
          <span className="keywordOrange">Riemann mapping theorem</span>:
          conformal mapping to disk, Carathéodory's theorem;
        </p>
        <p>
          <span className="keywordOrange">Harmonic functions</span>: connection
          with holomorphic functions, maximum principle, mean value theorem.
        </p>
      </>
    );
  },
  category_theory: () => {
    return (
      // Category theory
      <>
        <p> Lecturer: Denis N. Tereshkin </p>
        <p>
          <span className="keywordOrange">Category fundamentals</span>: category
          definitions, duality, functors, natural transformations, adjoint
          functors;
        </p>
        <p>
          <span className="keywordOrange">Representable functors</span>:
          category of sets, representable functors, Yoneda lemma;
        </p>
        <p>
          <span className="keywordOrange">(Co)limits</span>: limits and
          colimits, commutation with functors, Freyd's adjoint functor theorem;
        </p>
        <p>
          <span className="keywordOrange">Advanced constructions</span>: functor
          of elements, fibration of categories, Grothendieck construction, Kan
          extensions, descent and descent data;
        </p>
        <p>
          <span className="keywordOrange">Locally presentable categories</span>:
          (co)filtered categories, commutation of limits and colimits, algebraic
          theories, presheaves, locally presentable categories as localizing
          categories of presheaves, free completions.
        </p>
      </>
    );
  },
  intro_to_algebraic_number_theory: () => {
    return (
      // Intro to algebraic number theory
      <>
        <p> Lecturer: Mikhail Yu. Rosenblum </p>
        <p>
          <span className="keywordOrange">p-adic numbers</span>: absolute
          values, Ostrowski's theorem, topological and algebraic constructions
          of p-adic numbers, Hensel's lemma, Teichmüller mapping, p-adic
          logarithm, structure of multiplicative group;
        </p>
        <p>
          <span className="keywordOrange">Galois theory</span>: algebraic
          extensions, homomorphisms, algebraic closure, normal and separable
          extensions, Galois group, fundamental theorem, norm and trace,
          structure of finite fields, Kummer and Artin-Schreier extensions,
          solvability by radicals;
        </p>
        <p>
          <span className="keywordOrange">Algebraic number fields</span>:
          Dedekind rings, localization, extensions, lattices and duality,
          decomposition of prime ideals, different and discriminant, computation
          of ring of integers;
        </p>
        <p>
          <span className="keywordOrange">Local fields</span>: inertia and
          ramification, Krasner's lemma, algebraic closure of Cp, power series
          in Cp, Newton polygon, Artin-Hasse exponential;
        </p>
        <p>
          <span className="keywordOrange">Adelic topology</span>: adeles and
          ideles, approximation theorem, Dirichlet's unit theorem, finiteness of
          class number, modules and congruence subgroups.
        </p>
      </>
    );
  },
  coarse_geometry: () => {
    return (
      // Coarse geometry
      <>
        <p> Lecturer: Andronik A. Arutyunov </p>
        <p>
          <span className="keywordOrange">Coarse mappings</span>: coarse maps,
          coarse equivalences, Schwartz-Milnor theorem;
        </p>
        <p>
          <span className="keywordOrange">Coarse structures</span>: coarse
          structures, compactifications (Alexandrov, Higson, Freudenthal),
          coarse compactifications;
        </p>
        <p>
          <span className="keywordOrange">Metric properties</span>:
          metrizability and geodesic conditions, coarse topological structure,
          growth of spaces;
        </p>
        <p>
          <span className="keywordOrange">Amenability</span>: amenability and
          Følner's theorem;
        </p>
        <p>
          <span className="keywordOrange">Hyperbolic geometry</span>: Gromov
          hyperbolicity, CAT classification;
        </p>
        <p>
          <span className="keywordOrange">Embeddings and dimension</span>:
          coarse embeddings, asymptotic dimension, obstructions to
          embeddability.
        </p>
      </>
    );
  },
  surfaces_of_infinite_type: () => {
    return (
      // Surfaces of infinite type
      <>
        <p> Lecturer: Andrey Ryabichev </p>
        <p>
          <span className="keywordOrange">Infinite-type manifolds</span>:
          infinite connected sums, complements to wild submanifolds, Morse
          functions, handle decompositions, surface pants decompositions;
        </p>
        <p>
          <span className="keywordOrange">Ends of spaces</span>: inverse limits,
          profinite spaces, totally disconnected compacta with countable base,
          space of ends of non-compact manifolds, graph ends, explicit
          construction of surface ends, non-planar/non-orientable ends;
        </p>
        <p>
          <span className="keywordOrange">Surface classification</span>:
          construction of surfaces with given end sets, compactification of
          surfaces with planar ends, classification theorem for non-compact
          surfaces;
        </p>
        <p>
          <span className="keywordOrange">Mapping class groups</span>:
          compact-open topology on continuous maps, topological groups, group
          actions, homeomorphism groups, mapping class groups, curve complex and
          its properties;
        </p>
        <p>
          <span className="keywordOrange">
            Alexander principle and finite-type results
          </span>
          : Alexander principle, mapping class groups of compact/finite-type
          surfaces, Dehn-Nielsen theorem, Dehn-Lickorish theorem;
        </p>
        <p>
          <span className="keywordOrange">Infinite-type phenomena</span>:
          geometricity theorem for curve complex automorphisms, non-local
          compactness of infinite-type mapping class groups, Dehn twists and
          multitwists, compact support mapping class groups.
        </p>
      </>
    );
  },

  topology_of_surfaces: () => {
    return (
      // Topology of surfaces
      <>
        <p> Lecturer: Andrey Ryabichev </p>
        <p>
          <span className="keywordOrange">Differential topology</span>:
          Hatcher's proof of uniqueness of smooth structure on surfaces up to
          isotopy, Kirby calculus for surfaces, handle decompositions via Morse
          functions, combinatorics of handle attachments;
        </p>
        <p>
          <span className="keywordOrange">Branched coverings</span>: branched
          coverings, Hurwitz problem (realization of branching data), Edmonds
          factorization theorem (maps of non-zero degree as compositions of
          branched coverings and handle collapses);
        </p>
        <p>
          <span className="keywordOrange">Degree theory</span>: geometric degree
          (minimal number of preimages of regular values), equality with
          topological degree for orientation-preserving maps, inequality χ(M) ≤
          Deg(f) χ(N) for maps between closed surfaces;
        </p>
        <p>
          <span className="keywordOrange">Fundamental groups and homology</span>
          : Dehn-Nielsen theorem (automorphisms of π₁(M) realized by
          homeomorphisms), realization of H₁(M; Z) automorphisms preserving
          intersection pairing by homeomorphisms;
        </p>
        <p>
          <span className="keywordOrange">Cohomology theory</span>: cohomology
          with local coefficients, Euler class with coefficients in orientation
          sheaf;
        </p>
        <p>
          <span className="keywordOrange">Singularities</span>: surface maps
          with prescribed folds and cusps, visible contours as images of folds
          and cusps.
        </p>
      </>
    );
  },

  mapping_class_groups: () => {
    return (
      // Mapping class groups
      <>
        <p> Lecturer: Andrey Ryabichev </p>
        <p>
          <span className="keywordOrange">Surface classification</span>:
          classification of surfaces, hyperbolic plane coverings;
        </p>
        <p>
          <span className="keywordOrange">Curves and fundamental groups</span>:
          curves on surfaces and π₁, simple closed curves, change of variables
          principle;
        </p>
        <p>
          <span className="keywordOrange">Mapping class groups</span>: mapping
          class groups, examples of computations (disk, annulus, torus,
          punctured disk), Birman exact sequence;
        </p>
        <p>
          <span className="keywordOrange">Classical theorems</span>:
          Dehn-Lickorish theorem, intersection numbers of curves, action of
          mapping class groups on curve complexes;
        </p>
        <p>
          <span className="keywordOrange">Group theory</span>: finite
          presentability of mapping class groups, generators and relations.
        </p>
      </>
    );
  },

  algorithms_part_i: () => {
    return (
      // Algorithms Part I
      <>
        <p>
          <span className="keywordOrange">Data structures</span>: union-find,
          stacks, queues, binary heaps, binary search trees (including red-black
          BSTs, Kd-trees), hash tables (with separate chaining, linear
          probing);{" "}
        </p>
        <p>
          <span className="keywordOrange">Algorithms</span>: selection sort,
          insertion sort, shell sort, merge sort, quicksort, heapsort, and their
          applications, A*;{" "}
        </p>
        <p>
          <span className="keywordOrange">Analysis of algorithms</span>:
          amortized analysis of running time and memory usage.{" "}
        </p>
      </>
    );
  },
  programming_grade: () => {
    return <span>Grade is based on programming assignments in Java</span>;
  },
  haskell: () => {
    return (
      <>
        <p>
          <span className="keywordOrange">Language features</span>: recursion,
          currying, list comprehensions, maps, folds, algebraic types, higher
          order functions, strict vs lazy evaluation, monads and monad
          transformers, concurrency (atomic operations), parallelization,
          lenses;{" "}
        </p>
        <p>
          <span className="keywordOrange">Functional data structures</span>:
          stacks, queues, double-ended queues, sets, binary and rose trees, list
          and tree zippers;{" "}
        </p>
        <p>
          <span className="keywordOrange">Algorithms and applications</span>:
          operations on trees (traversing, searching, reparenting, path
          finding), dynamic programming with memoization, parsing,
          domain-specific language interpretation, state machines{" "}
        </p>
      </>
    );
  },
};

const Popup = ({ show, x, y, id, onClick }) => {
  let isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  let position;
  if (isMobile) {
    position = {
      left: "15px",
      top: y + "px",
      width: "calc(100% - 30px)",
    };
  } else {
    position = {
      left: x + "px",
      top: y + "px",
    };
  }
  if (show) {
    return (
      <div style={position} className="popup" onClick={onClick}>
        {popupDict[id]()}
      </div>
    );
  } else return null;
};

export default Popup;
