# modern-information-retrieval
It was our project in the Modern Information Retrieval course at the Sharif University of Technology. It's in three phases.
### Table of Contents
---
- [Explanations](#explanations)
  - [Phase 1](phase-1)
  - [Phase 2](phase-2)
  - [Phase 3](phase-3)
- [How to Run](#how-to-run)
  - [Phase 3](phase-3)
- [Sample of the UI](#sample-of-the-ui)
### Explanations
---
The explanation of each phase and its implemented parts is as below:
#### Phase 1
In this phase, we implemented the base information retrieval algorithms. The algorithms are `ltn.lnn`, `ltc.lnc`, and `okapi25`. We also implemented some compressions types (`Gamma Code` and `Variable Byte Code`). At last, we evaluate our algorithms' implementations.
#### Phase 2
In this phase, we implemented Naive Bayse classification, classification with neural networks, classification with language models, and transformer-based classification. We also enhanced our search engine. There are some evaluations for the classifications, too.
#### Phase 3
In this phase, first, we implemented a crawler for [semanticscholar.org](https://www.semanticscholar.org) website. Then we implemented a personalized PageRank algorithm and by using it, we create a personalized search. After that, we ranked the authors of our crawled papers. The next part is a recommender system with collaborative filtering and content-based algorithms and their evaluations. At last, we create a beautiful UI which name is `Amoogle` (a combination of Amir Mohammad and Google) for the search engine in the first phase.
### How to Run
---
#### Phase 3
It's a React project. Run the below commands respectively:
- First, run the last 6 cells of the `Pahse 3/ir-phase-3.ipynb` file. It's somehow the backend of the UI.
- Then run `npm install` in the `Pahse 3/search_engin_ui` directory.
- At last `npm start` in the `Pahse 3/search_engin_ui` directory.
### Sample of The UI
---
The implemented UI in the third phase for the first phase's search engine is as below:
- Home Page
  <img width="1680" alt="home page" src="https://github.com/AmirMohammadFakhimi/modern-information-retrieval/assets/79265203/8d618c05-da68-4776-9dba-a609b53ea5d5">
- Search Sample (Title with an Abstract Snippet)
  <img width="1680" alt="search sample" src="https://github.com/AmirMohammadFakhimi/modern-information-retrieval/assets/79265203/a4ac2a4a-4821-44a3-baa7-f21fd40c0816">
- Click On a Result (Title with Abstract)
  <img width="1680" alt="click on a result" src="https://github.com/AmirMohammadFakhimi/modern-information-retrieval/assets/79265203/7ec0924a-5aa7-481d-b348-3a5a755b876b">
- Search Sample With No Results
  <img width="1680" alt="search sample with no results" src="https://github.com/AmirMohammadFakhimi/modern-information-retrieval/assets/79265203/df665dd8-0e54-4f36-99a0-afe4eed1a4c2">
