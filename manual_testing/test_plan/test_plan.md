**TEST PLAN**

**Table of Contents**

[**INTRODUCTION	3**](#introduction)

[1.1	Objectives	3](#the-test-plan-outlines-the-testing-approach-for-the-advantages-platform,-designed-to-ensure-that-all-functionality-,-business-logic,-and-usability-expectations-are-met.-it-defines-the-objectives,-scope,-assumptions,-risks,-and-deliverables-associated-with-testing-the-platform.)  
[1.2	Team Members	3](#heading=h.8ntrpef4h7sj)

[**2**	**SCOPE	3**](#heading=h.vm6587zgqlas)

[**3**	**ASSUMPTIONS / RISKS	4**](#heading=h.tttl86r2zrpp)

[3.1	Assumptions	4](#assumptions)  
[3.2	Risks	4](#risks)

[**4**	**TEST APPROACH	4**](#heading=h.nikgfpelg3zv)

[4.1	Test Automation	4](#heading)

[**5**	**TEST ENVIRONMENT	5**](#heading=h.kwkrip5kd6yt)

[**6**	**MILESTONES / DELIVERABLES	5**](#heading-1)

[6.1	Test Schedule	5](#heading=h.fxx2mcigrqc9)  
[6.2	Deliverables	5](#heading-2)

**Introduction** 

The Test Plan outlines the testing approach for the **Advantages** platform, designed to ensure 	that all functionality , business logic, and usability expectations are met. It defines the 	objectives, scope, assumptions, risks, and deliverables associated with testing the 	platform.

1. Objectives

**Advantages** is a digital platform that helps HR personnel create a more flexible and engaging work environment for employees  by offering personalized employee advantages. It allows companies to allocate budget to different employee groups, provide a range of advantage options and simplify benefit management, all in compliance with local tax regulations.

The goal of this plan is to verify the quality, performance and correctness of all Advantages modules before production release.

2. Team Members

| Resource Name | Role |
| :---- | :---- |
| Stefan Kilibarda | QA Engineer |
|  |  |
|  |  |

2. **Scope**

The initial phase will include all necessary  requirements such as registering a new user, adding new advantages, editing and/or allocating them, managing budgets, etc. These and any other requirements that get included must all be tested.  At the end of Phase 1, a tester must be able to:

1. Create monthly selection of advantages by employees and edit them

2. Create groups and allocate budgets to them

3. Customize advantage types

4. Budget management and budget tracking

5. Receive notifications and confirmations from users

6. Access usage summaries and analytics for HR

As the team works with the product they will define the needs for the second phase. At first testing will be static and involves analyzing the documentation for inconsistencies and faults, as the development progresses, testing will transition into dynamic testing with the execution of written test cases.**Assumptions / Risks**

1. Assumptions

This section lists assumptions that are made specific to this project.

1. The product will be delivered in a state ready for production environment  
2. QA has access to up-to-date builds and proper test environments  
3. Test data is available and representative of production usage  
4. Testers are informed about user roles and permissions

   2. Risks

The following risks have been identified and the appropriate action identified to mitigate their impact on the project.  The impact (or severity) of the risk is based on how the project would be affected if the risk was triggered.  The trigger is what milestone or event would cause the risk to become an issue to be dealt with.

| \# | Risk | Impact | Trigger | Mitigation Plan |
| ----- | :---- | :---- | :---- | :---- |
| 1 | Changing requirements during test phase | High | Delays in implementation date  | Freeze test scope and requirements for coming sprint  |
| 2 | Poorly configured test environment | Medium \- High | False test data | Communicate requirements with developers and system administrators  |
| 3 | Weekly delivery is not possible because the developer works off site | Medium | Product did not get delivered on schedule | Align test planning with delivery windows; communicate test dependencies early |

3. **Test Approach**

The testing process will follow Agile methodology, integrated with development sprints. Each feature will be tested manually first, then covered by automated tests Cypress (Javascript) where appropriate.

Manual exploratory testing will be used early in the lifecycle but functional and regression test suites will be executed with each iteration.

1. Test Automation

Automated tests will be implemented using Cypress and used for smoke tests and regression testing.

4.  **Test Environment**

For testing purposes Development and Staging environments will be needed, both identically configured, setup and maintenance will be handled by system administrators. Test users and test data will be seeded using seeders provided by the backend developer, thus creating consistent and realistic test data across environments. Technology stack and versions provided below.

Web server: Nginx (v1.26.0)  
Database: MySQL (v8.1)

5. **Milestones / Deliverables**

   1. Test Schedule

The initial test schedule follows……….

| Task Name | Start | Finish  | Effort | Comments |
| :---- | ----- | ----- | ----- | ----- |
| Test Planning |  |  | 2 workdays |  |
| Staff and train new test resources |  |  | 1 workdays |  |
| Writing test cases |  |  | 5 workdays |  |
| Writing automatic test |  |  | 5 workdays |  |
| First deploy to QA test environment |  |  | 1 workdays |  |
| Functional testing – Iteration 1 |  |  | 5 workdays | With bug reporting |
| Iteration 2 deploy to QA test environment |  |  | 1 workdays |  |
| Functional testing – Iteration 2 |  |  | 5 workdays | With bug reporting |
| System testing |  |  | 5 workdays | With bug reporting |
| Regression testing |  |  | 3 workdays | After fixes |
| UAT |  |  | 2 workdays |  |
| Resolution of final defects and final build testing |  |  | 3 workdays |  |
| Deploy to Staging environment |  |  | 2 workdays |  |
| Release to Production |  |  | 1 workdays  |  |

2. Deliverables

| Deliverable | For | Date / Milestone |
| :---- | :---- | :---- |
| Test Plan | Project Manager; QA Director; Test Team | Project start |
| Traceability Matrix | Project Manager; QA Director |  |
| Test cases | Project Manager, QA director |  |
| Test Results | Project Manager |  After each cycle |
|Bug reports | QA director, Development team | After each cycle |
| Test Status report | QA Manager, QA Director |  |
|  |  |  |
| Metrics | All team members |  |
|  |  |  |

6. **Entry/exit Criteria**

6.1  Entry Criteria

Testing for a particular sprint, feature or release will begin once the following conditions are met:

- All relevant requirements have been finalized and approved  
- The build has been completed and deployed to the testing environment by the development team  
- Test data has been seeded  
- QA team has necessary credentials and access to the test environment

6.2 Exit Criteria

	Testing will be considered complete once all the following conditions are met:

- All planned test cases have been executed  
- All critical and/or high-priority bugs have been fixed and verified  
- Test summary report has been created and reviewed
