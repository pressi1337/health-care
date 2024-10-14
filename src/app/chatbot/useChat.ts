import { useState, useCallback } from "react";


const disease: any = {

    left: {
        heart_disease_01: {
            message: {
                text: 'please enter the following information',
                value: ''
            }
        },
        heart_disease_02: {
            message: {
                text: 'please enter the following information',
                value: ''
            }
        },
        heart_disease_03: {
            message: {
                text: `
                      Please enter a valid range (1 to 4) for CP (chest pain)

                       1 - Typical angina: Classic heart-related chest pain, often due to coronary artery disease.
                       2 - Atypical angina: Chest pain that doesn’t follow the typical pattern but might still be heart-related.
                       3 - Non-anginal pain: Pain in the chest that is not caused by the heart (e.g., musculoskeletal or gastrointestinal issues).
                       4 - Asymptomatic: No chest pain or symptoms, even in the presence of heart disease.
                      `,
                value: ''
            }
        },
        heart_disease_04: {
            message: {
                text: `Trestbps: Resting blood pressure measured in millimeters of mercury (mm Hg) `,
                value: ''
            }
        },
        heart_disease_05: {
            message: {
                text: `Cholesterol in mg/dL `,
                value: ''
            }
        }
    },
    right: {
        heart_disease_01: {
            message: {
                text: 'Prediction of Heart Disease',
                value: ''
            }
        }
    },
    rightQA: {
        heart_disease_01: {
            message: {
                text: 'Your gender please ',
                value: '',
                name: 'gender',
                key: 'heart_disease_02',
                submited: false,
                prediction: false,
                inputType: 'select',
                options: ['Male', 'Female']

            }
        },
        heart_disease_02: {
            message: {
                text: 'Your Age ',
                value: '',
                name: 'age',
                key: 'heart_disease_03',
                submited: false,
                prediction: false,
                inputType: 'text',

            }
        },
        heart_disease_03: {
            message: {
                text: 'Your CP Level ',
                name: 'cp',
                value: '',
                key: 'heart_disease_04',
                submited: false,
                prediction: false,
                inputType: 'text'
            }
        },
        heart_disease_04: {
            message: {
                text: 'Your Trestbps ',
                name: 'Trestbps',
                value: '',
                key: 'heart_disease_05',
                submited: false,
                prediction: false,
                inputType: 'text'
            }
        },
        heart_disease_05: {
            message: {
                text: ' Your Cholesterol ',
                name: 'cholesterol',
                value: '',
                key: 'heart_disease_06',
                submited: false,
                prediction: true,
                inputType: 'text'
            }
        }

    }
}
const useChat = () => {
    const [message, setMessage] = useState<any>([]);

    const [leftLoading, setLeftLoading] = useState<Boolean>(false)
    const [rightLoading, setRightLoading] = useState<Boolean>(false)

    const ChatAlg = (key = '', value = '') => {


        console.log({ key })
        if (key === 'heart_disease_01') {
            setMessage((prv: any) => ([...prv, {
                key: key,
                placement: 'right',
                message: disease['right'][key].message
            },
            {
                key: key,
                placement: 'left',
                message: disease['right'][key].message
            }, {

                key: key,
                placement: 'rightQA',
                message: disease['rightQA'][key].message,
            }]))
        }
        if (key === 'heart_disease_02') {
            setMessage((prv: any) => {
                const updatedItems = prv.map((item: any) => {
                    if (item.key === 'heart_disease_01' && item.placement === 'rightQA') {
                        return { ...item, message: { ...item.message, value: value, submited: true } };
                    }
                    return item;
                });

                return [...updatedItems, {
                    key: key,
                    placement: 'left',
                    message: disease['left'][key].message,
                }, {
                    key: key,
                    placement: 'rightQA',
                    message: disease['rightQA'][key].message,
                }];
            });

        }
        if (key === 'heart_disease_03') {
            setMessage((prv: any) => {
                const updatedItems = prv.map((item: any) => {
                    if (item.key === 'heart_disease_02' && item.placement === 'rightQA') {
                        return { ...item, message: { ...item.message, value: value, submited: true } };
                    }
                    return item;
                });

                return [...updatedItems, {
                    key: key,
                    placement: 'left',
                    message: disease['left'][key].message,
                }, {
                    key: key,
                    placement: 'rightQA',
                    message: disease['rightQA'][key].message,
                }];
            });

        }
        if (key === 'heart_disease_04') {
            setMessage((prv: any) => {
                const updatedItems = prv.map((item: any) => {
                    if (item.key === 'heart_disease_03' && item.placement === 'rightQA') {
                        return { ...item, message: { ...item.message, value: value, submited: true } };
                    }
                    return item;
                });

                return [...updatedItems, {
                    key: key,
                    placement: 'left',
                    message: disease['left'][key].message,
                }, {
                    key: key,
                    placement: 'rightQA',
                    message: disease['rightQA'][key].message,
                }];
            });

        }
        if (key === 'heart_disease_05') {
            setMessage((prv: any) => {
                const updatedItems = prv.map((item: any) => {
                    if (item.key === 'heart_disease_04' && item.placement === 'rightQA') {
                        return { ...item, message: { ...item.message, value: value, submited: true } };
                    }
                    return item;
                });

                return [...updatedItems, {
                    key: key,
                    placement: 'left',
                    message: disease['left'][key].message,
                }, {
                    key: key,
                    placement: 'rightQA',
                    message: disease['rightQA'][key].message,
                }];
            });

        }




    }
    return {
        message,
        setMessage,
        ChatAlg

    };
}




export default useChat;