const Data = [
  {
    "title": "Consensus mechanism",
    "type": "core-technology",
    "relations": [
      ""
    ]
  },
  {
    "title": "zk-SNARKs",
    "type": "core-technology",
    "relations": [
      ""
    ]
  },
  {
    "title": "Inter-blockchain Communication (IBC)",
    "type": "core-technology",
    "relations": [
      ""
    ]
  },
  {
    "title": "Anonymous proof of identity",
    "type": "core-technology",
    "relations": [
      "zk-SNARKs"
    ]
  },
  {
    "title": "Self-sovereign identity",
    "type": "general-improvement",
    "relations": [
      "Anonymous proof of identity"
    ]
  },
  {
    "title": "Fully homomorphic encryption",
    "type": "general-improvement",
    "relations": [
      ""
    ]
  },
  {
    "title": "Threshold encryption",
    "type": "core-technology",
    "relations": [
      ""
    ]
  },
  {
    "title": "Private computation on aggregate data",
    "type": "core-technology",
    "relations": [
      "Threshold encryption"
    ]
  },
  {
    "title": "Private decentralised exchanges",
    "type": "ic-tech",
    "relations": [
      "Private computation on aggregate data"
    ]
  },
  {
    "title": "Natural language processing",
    "type": "general-improvement",
    "relations": [
      ""
    ]
  },
  {
    "title": "Private distributed execution",
    "type": "general-improvement",
    "relations": [
      "Fully homomorphic encryption",
      "zk-SNARKs",
      "Distributed execution (smart contracts)"
    ]
  },
  {
    "title": "Confidential AI",
    "type": "general-improvement",
    "relations": [
      "Private distributed execution"
    ]
  },
  {
    "title": "Replicated state machines",
    "type": "core-technology",
    "relations": [
      "Consensus mechanism"
    ]
  },
  {
    "title": "Distributed execution (smart contract)",
    "type": "ic-tech",
    "relations": [
      "Replicated state machines"
    ]
  },
  {
    "title": "Quadratic funding",
    "type": "ic-tech",
    "relations": [
      "Distributed execution (smart contract)"
    ]
  },
  {
    "title": "Decentralised exchanges",
    "type": "ic-tech",
    "relations": [
      "Distributed execution (smart contract)"
    ]
  },
  {
    "title": "Decentralised autonomous organisations (DAOs)",
    "type": "ic-tech",
    "relations": [
      "Distributed execution (smart contract)"
    ]
  },
  {
    "title": "Anonymous voting",
    "type": "ic-tech",
    "relations": [
      "Anonymous proof of identity",
      "Distributed execution (smart contract)"
    ]
  },
  {
    "title": "Pseudonymous reputation systems",
    "type": "general-improvement",
    "relations": [
      "Anonymous voting",
      "Anonymous proof of identity"
    ]
  },
  {
    "title": "Private DAOs and social platforms",
    "type": "general-improvement",
    "relations": [
      "Decentralised autonomous organisations (DAOs)",
      "Self-sovereign identity",
      "Inter-blockchain communication",
      "Private distributed execution",
      "Pseudonymous reputation systems"
    ]
  },
  {
    "title": "Prediction markets",
    "type": "ic-tech",
    "relations": [
      "Distributed execution (smart contract)"
    ]
  },
  {
    "title": "Computational law",
    "type": "general-improvement",
    "relations": [
      "Distributed execution (smart contract)",
      "Natural language processing"
    ]
  }
];

export default Data;