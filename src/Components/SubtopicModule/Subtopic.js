import React, { Component } from 'react';
import { Button, Row, Col ,Modal} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined ,ExclamationCircleOutlined} from '@ant-design/icons';
import classes from './subtopic.module.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const { confirm } = Modal;


const UP = -1
const DOWN = 1
const grid=8

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
}


export class CourseContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          topics : topics
        };
        this.onDragEnd = this.onDragEnd.bind(this);
      }
      

    handleMove = (id, direction) => {
        const { topics } = this.state
        const position = topics.findIndex((i) => i.topic.sno === id)
        console.log(position)
        if (position < 0) {
            throw new Error("Given item not found.")
        } else if ((direction === UP && position === 0) || (direction === DOWN && position === topics.length - 1)) {
            return // canot move outside of array
        }

        const topic = topics[position]
        // save item for later
        let newtopics = topics.filter((i) => i.topic.sno !== id)
        newtopics.splice(position + direction, 0, topic)
        newtopics = newtopics.map((topic, index) => {
            return (
                {
                    topic: {
                        sno: index,
                        name: topic.topic.name,
                        slug: topic.topic.slug,
                    },
                    subtopics: topic.subtopics
                }
            )
        })
        this.setState({ topics: newtopics })
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const topics = reorder(
          this.state.topics,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          topics
        });
      }

    
    
    deleteTopic(topic, key) {
        
            const deletedTopic = this.state.topics.filter((topic, index) =>
                index !== key);
            this.setState({
                topics: deletedTopic
            })
         
    }

    showDeleteConfirm(topic, index) {
        const onok = () => {
            this.deleteTopic(topic, index)
        }
        confirm({
            title: 'Are you sure delete this topic?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                onok()
            },
            onCancel() {

            },
        });   
        

        // const topics=reorder(this.state.topics,result.source.index,result.destination.index);

        // this.setState({topics});
    }

    render() {
        
        const { topics } = this.state;

        console.log(topics)
        let mainContent
        if (topics) {
            mainContent = topics.map((topic, index) => {
                return (
                    <div key={index}   id={topic.topic.sno}>
                        <div style={{ display: "flex", alignItems: "center" }} >
                            <ion-icon onClick={() => this.handleMove(topic.topic.sno, UP)} style={{ cursor: 'pointer' }} size="large" name="chevron-up-outline"></ion-icon>
                            <div className={classes.Topic}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <EditOutlined
                                        style={{ color: 'white' }}
                                        onClick={() => this.editTopic(topic, index)} />
                                    <h4 className={classes.topicTag}>
                                        {topic.topic.name}
                                    </h4>
                                </div>
                                <DeleteOutlined style={{ color: "white" }} onClick={() => this.showDeleteConfirm(topic.topic, index,)} />
                            </div>
                            <ion-icon style={{ cursor: 'pointer' }} onClick={() => this.handleMove(topic.topic.sno, DOWN)} size="large" name="chevron-down-outline"></ion-icon>
                        </div>
                        <ol style={{ marginLeft: "50px" }}>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                                <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    // style={getListStyle(snapshot.isDraggingOver)}
                                    >
                                    {topic.subtopics.map((subtopic, index) => 
                                        (
                                        <Draggable key={subtopic.id} draggableId={subtopic.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>
                                      
                                                        <div key ={subtopic.id} className={classes.subtopicLink}>
                                                            <li id={subtopic.id}>
                                                                {subtopic.name}
                                                            </li>
                                                        </div>
                                            </div>
                                        )}
                                        </Draggable>)
                                    )}
                                    {provided.placeholder}
                                    </div>
                                )}
                                </Droppable>
                            </DragDropContext>
                        </ol>
                        
                        <Button className={classes.AddButton} type="primary" shape="circle" icon={<PlusOutlined />} />
                    </div>

                )
            })
        }
        return (
            <div>
                <Row justify="center">
                    <Col lg={16}>
                        <div style={{ padding: "20px" }}>                    
                                {mainContent}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CourseContent

const topics = [
    {
        "topic": {
            "sno": 0,
            "name": "Most Important Questions in CD",
            "slug": "Most-Important-Questions-in-CD"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Unit 1 : Introduction to Compiler",
                "slug": "Unit-1-:-Introduction-to-Compiler-1"
            },
            {
                "sno": 1,
                "name": "Unit 2 :Basic Parsing Techniques",
                "slug": "Unit-2-:Basic-Parsing-Techniques"
            },
            {
                "sno": 2,
                "name": "Unit 2 Continued",
                "slug": "Unit-2-Continued"
            },
            {
                "sno": 3,
                "name": "Unit 3: Syntax Directed Translation",
                "slug": "Unit-3:-Syntax-Directed-Translation"
            },
            {
                "sno": 4,
                "name": "Unit 4 Symbol Table",
                "slug": "Unit-4-Symbol-Table"
            },
            {
                "sno": 5,
                "name": "Unit 5: Optimization&Code generation",
                "slug": "Unit-5:-Optimization-Code-generation"
            }
        ]
    },
    {
        "topic": {
            "sno": 1,
            "name": "Chapter 1: Introduction to Compiler ",
            "slug": "Chapter-1:-Introduction-to-Compiler-"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Translator , Compiler and Interpreter",
                "slug": "Translator-Compiler-and-Interpreter"
            },
            {
                "sno": 1,
                "name": "Phases Of Compiler",
                "slug": "Phases-Of-Compiler"
            },
            {
                "sno": 2,
                "name": "Phases of Compiler - Example",
                "slug": "Phases-of-Compiler-Example"
            },
            {
                "sno": 3,
                "name": "Classification Of Compiler",
                "slug": "Classification-Of-Compiler"
            },
            {
                "sno": 4,
                "name": "Bootstrapping",
                "slug": "Bootstrapping"
            },
            {
                "sno": 5,
                "name": "Lexical Analysis",
                "slug": "Lexical-Analysis-1"
            },
            {
                "sno": 6,
                "name": "Regular Expressions",
                "slug": "Regular-Expressions-1"
            },
            {
                "sno": 7,
                "name": "Finite Automata",
                "slug": "Finite-Automata-1"
            },
            {
                "sno": 8,
                "name": "Convertions",
                "slug": "Convertions"
            },
            {
                "sno": 9,
                "name": "Optimization of DFA",
                "slug": "Optimization-of-DFA"
            },
            {
                "sno": 10,
                "name": "DFA Minimization",
                "slug": "DFA-Minimization-1"
            },
            {
                "sno": 11,
                "name": "Context-free Grammars",
                "slug": "Context-free-Grammars-1"
            },
            {
                "sno": 12,
                "name": "Compiler construction tools",
                "slug": "Compiler-construction-tools"
            },
            {
                "sno": 13,
                "name": "Thompson Construction",
                "slug": "Thompson-Construction"
            },
            {
                "sno": 14,
                "name": "BNF Notation in Compiler Design",
                "slug": "BNF-Notation-in-Compiler-Design"
            },
            {
                "sno": 15,
                "name": "Ambiguity in Grammar",
                "slug": "Ambiguity-in-Grammar"
            },
            {
                "sno": 16,
                "name": "YACC",
                "slug": "YACC"
            }
        ]
    },
    {
        "topic": {
            "sno": 2,
            "name": "Chapter 2 Basic Parsing Techniques",
            "slug": "Chapter-2-Basic-Parsing-Techniques"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Parsers",
                "slug": "Parsers"
            },
            {
                "sno": 1,
                "name": "First and Follow",
                "slug": "First-and-Follow"
            },
            {
                "sno": 2,
                "name": "Practice Questions",
                "slug": "Practice-Questions"
            },
            {
                "sno": 3,
                "name": "Practice Questions II",
                "slug": "Practice-Questions-II"
            },
            {
                "sno": 4,
                "name": "Top Down Parser",
                "slug": "Top-Down-Parser"
            },
            {
                "sno": 5,
                "name": "LL(1) Parsing:",
                "slug": "LL-1-Parsing:"
            },
            {
                "sno": 6,
                "name": "LL(1)  parsing questions II",
                "slug": "LL-1-parsing-questions-II-1"
            },
            {
                "sno": 7,
                "name": "Remove Left Recursion",
                "slug": "Remove-Left-Recursion-1"
            },
            {
                "sno": 8,
                "name": "Bottom Up Parsing",
                "slug": "Bottom-Up-Parsing"
            },
            {
                "sno": 9,
                "name": "Prctice Questions",
                "slug": "Prctice-Questions"
            },
            {
                "sno": 10,
                "name": "Construction of LR(0) Parsing table",
                "slug": "Construction-of-LR-0-Parsing-table"
            },
            {
                "sno": 11,
                "name": "SLR ( 1 ) Introduction",
                "slug": "SLR-1-Introduction"
            },
            {
                "sno": 12,
                "name": "Practice Questions on SLR 1",
                "slug": "Practice-Questions-on-SLR-1"
            },
            {
                "sno": 13,
                "name": "Problems and Drawbacks of SLR ( 1 )",
                "slug": "Problems-and-Drawbacks-of-SLR-1-"
            },
            {
                "sno": 14,
                "name": "CLR ( 1 ) | Conical LR( 1 )",
                "slug": "CLR-1-|-Conical-LR-1-"
            },
            {
                "sno": 15,
                "name": "LALR ( 1 )",
                "slug": "LALR-1-"
            },
            {
                "sno": 16,
                "name": "Some Practice Questions",
                "slug": "Some-Practice-Questions"
            },
            {
                "sno": 17,
                "name": "Operator Precedence Parsing",
                "slug": "Operator-Precedence-Parsing"
            },
            {
                "sno": 18,
                "name": "Precedence Parsing",
                "slug": "Precedence-Parsing"
            }
        ]
    },
    {
        "topic": {
            "sno": 3,
            "name": "Chapter 3 : Syntax Directed Translation",
            "slug": "Chapter-3-:-Syntax-Directed-Translation"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Syntax Directed Transition ( SDT )",
                "slug": "Syntax-Directed-Transition-SDT-"
            },
            {
                "sno": 1,
                "name": "Implementation of ( SDT )",
                "slug": "Implementation-of-SDT-"
            },
            {
                "sno": 2,
                "name": "Implementation of ( SDT ) II",
                "slug": "Implementation-of-SDT-II"
            },
            {
                "sno": 3,
                "name": "Questions on SDT",
                "slug": "Questions-on-SDT-1"
            },
            {
                "sno": 4,
                "name": "S – attributed and L – attributed SDTs in Syntax directed translation",
                "slug": "S-attributed-and-L-attributed-SDTs-in-Syntax-directed-translation"
            },
            {
                "sno": 5,
                "name": "Intermediate Code Generation",
                "slug": "Intermediate-Code-Generation-1"
            },
            {
                "sno": 6,
                "name": "Three address Code",
                "slug": "Three-address-Code-1"
            },
            {
                "sno": 7,
                "name": "Three address Code II",
                "slug": "Three-address-Code-II-1"
            },
            {
                "sno": 8,
                "name": "3-address code for Array",
                "slug": "3-address-code-for-Array"
            },
            {
                "sno": 9,
                "name": "3 address code implementation",
                "slug": "3-address-code-implementation"
            },
            {
                "sno": 10,
                "name": "Back Patching",
                "slug": "Back-Patching"
            }
        ]
    },
    {
        "topic": {
            "sno": 4,
            "name": "Chapter 4: Symbol Table",
            "slug": "Chapter-4:-Symbol-Table"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Symbol table",
                "slug": "Symbol-table"
            },
            {
                "sno": 1,
                "name": "Basic Implementation Techniques",
                "slug": "Basic-Implementation-Techniques-1"
            },
            {
                "sno": 2,
                "name": "Hash Functions",
                "slug": "Hash-Functions"
            },
            {
                "sno": 3,
                "name": "Collisions",
                "slug": "Collisions"
            },
            {
                "sno": 4,
                "name": "Scope Management in Symbol Table",
                "slug": "Scope-Management-in-Symbol-Table"
            },
            {
                "sno": 5,
                "name": "RunTime Environment",
                "slug": "RunTime-Environment-1"
            },
            {
                "sno": 6,
                "name": "Storage Organization",
                "slug": "Storage-Organization"
            },
            {
                "sno": 7,
                "name": "Storage Allocation Strategies",
                "slug": "Storage-Allocation-Strategies"
            },
            {
                "sno": 8,
                "name": "Error Recovery Strategies",
                "slug": "Error-Recovery-Strategies-1"
            },
            {
                "sno": 9,
                "name": "Parameter Passing",
                "slug": "Parameter-Passing"
            }
        ]
    },
    {
        "topic": {
            "sno": 5,
            "name": "Chapter 5: Code Generations ",
            "slug": "Chapter-5:-Code-Generations-"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Introduction",
                "slug": "Introduction"
            },
            {
                "sno": 1,
                "name": "Issues in the Design of a Code Generator",
                "slug": "Issues-in-the-Design-of-a-Code-Generator-1"
            },
            {
                "sno": 2,
                "name": "Types of Optimization",
                "slug": "Types-of-Optimization"
            },
            {
                "sno": 3,
                "name": "Scope of optimization",
                "slug": "Scope-of-optimization"
            },
            {
                "sno": 4,
                "name": "Direct Acyclic Graph ( DAGs )",
                "slug": "Direct-Acyclic-Graph-DAGs-"
            },
            {
                "sno": 5,
                "name": "PRACTICE PROBLEMS BASED ON DIRECTED ACYCLIC GRAPHS",
                "slug": "PRACTICE-PROBLEMS-BASED-ON-DIRECTED-ACYCLIC-GRAPHS-1"
            },
            {
                "sno": 6,
                "name": "PROBLEMS BASED ON DIRECTED ACYCLIC GRAPHS II",
                "slug": "PROBLEMS-BASED-ON-DIRECTED-ACYCLIC-GRAPHS-II"
            },
            {
                "sno": 7,
                "name": "Code Optimization technique",
                "slug": "Code-Optimization-technique"
            },
            {
                "sno": 8,
                "name": "Code Optimization techniques in detail",
                "slug": "Code-Optimization-techniques-in-detail"
            },
            {
                "sno": 9,
                "name": "Loop optimization",
                "slug": "Loop-optimization"
            },
            {
                "sno": 10,
                "name": "Induction variable and reduction in strength",
                "slug": "Induction-variable-and-reduction-in-strength"
            },
            {
                "sno": 11,
                "name": "Value numbers and Algebraic laws",
                "slug": "Value-numbers-and-Algebraic-laws"
            },
            {
                "sno": 12,
                "name": "Data flow analysis in Compiler",
                "slug": "Data-flow-analysis-in-Compiler"
            },
            {
                "sno": 13,
                "name": "Global data flow analysis",
                "slug": "Global-data-flow-analysis"
            },
            {
                "sno": 14,
                "name": "Peephole Optimization",
                "slug": "Peephole-Optimization"
            }
        ]
    },
    {
        "topic": {
            "sno": 6,
            "name": "Previous Year Question Papers",
            "slug": "Previous-Year-Question-Papers-1"
        },
        "subtopics": [
            {
                "sno": 0,
                "name": "Year 2018-2019",
                "slug": "Year-2018-2019-1"
            },
            {
                "sno": 1,
                "name": "Year 2017-2018",
                "slug": "Year-2017-2018"
            },
            {
                "sno": 2,
                "name": "Year 2016-2017",
                "slug": "Year-2016-2017"
            }
        ]
    }
]
