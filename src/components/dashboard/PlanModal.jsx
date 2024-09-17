import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/dashboard/PlanModal.module.css";
import Modal from "../Modal";

const initialPlanModalData = {
    name: '',
    startterm: 'Fall',
    startyear: '2023',
    endterm: 'Spring',
    endyear: '2027',
    system: 'Quarter',
    summer: 'No',
    defaultplan: 'No',
  };

function validateForm(formState) {
    if (!formState.name) {
        return "Please input a degree plan name.";
    }

    if (formState.startyear > formState.endyear) {
        return "Please select a valid time range.";
    }

    if (formState.startyear === formState.endyear) {
        const termOrder = ["Winter", "Spring", "Summer", "Fall"];
        if (termOrder.indexOf(formState.startterm) > termOrder.indexOf(formState.endterm)) {
            return "Please select a valid time range.";
        }
    }

    if (formState.summer === "No" && (formState.startterm === "Summer" || formState.endterm === "Summer")) {
        return "Summer terms are off. Please reselect.";
    }

    if (formState.system === "Semester" && (formState.startterm === "Winter" || formState.endterm === "Winter")) {
        return "Semester systems do not have winter terms. Please reselect.";
    }

    return null;
}

export function PlanModal({ isOpen, onClose, onAddPlan}) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(initialPlanModalData);
    const [error, setError] = useState(null);

    const termsList = ["Fall", "Winter", "Spring", "Summer"];
    const yearsList = [];
    for (let i = 2019; i <= 2034; i++) {
        yearsList.push(String(i));
    }

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
          setTimeout(() => {
            focusInputRef.current.focus();
          }, 0);
        }
      }, [isOpen]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(formState)) {
            onAddPlan(formState);
            setFormState((prevFormData) => ({
                ...prevFormData,
                name: '',
            }));
            handleClose();
        }
        setError(validateForm(formState));
    };

    const handleClose = () => {
        setFormState(initialPlanModalData);
        setError(null);
        onClose();
    }

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
            <h3>Add a degree plan</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRowText}>
                <input
                    ref={focusInputRef}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Degree plan name"
                    value={formState.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.formRowSelect1}>
                <div className={styles.selectBlock}>
                    <label htmlFor="startterm">Start term</label>
                    <select 
                        name="startterm" 
                        id="startterm" 
                        onChange={handleInputChange}
                        value={formState.startterm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="startyear">Start year</label>
                    <select 
                        name="startyear" 
                        id="startyear" 
                        onChange={handleInputChange}
                        value={formState.startyear}  
                        required>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endterm">End term</label>
                    <select 
                        name="endterm" 
                        id="endterm" 
                        onChange={handleInputChange} 
                        value={formState.endterm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endyear">End Year</label>
                    <select 
                        name="endyear" 
                        id="endyear" 
                        onChange={handleInputChange} 
                        value={formState.endyear} 
                        required>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
            </div>
            <div className={styles.formRowSelect2}>
                <div className={styles.selectBlock}>
                    <label htmlFor="system">System</label>
                    <select 
                        name="system" 
                        id="system" 
                        onChange={handleInputChange} 
                        value={formState.system} 
                        required>
                            <option value="Quarter">Quarter</option>
                            <option value="Semester">Semester</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="summer">Summer term</label>
                    <select 
                        name="summer" 
                        id="summer" 
                        onChange={handleInputChange} 
                        value={formState.summer} 
                        required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="defaultplan">Default plan</label>
                    <select 
                        name="defaultplan"
                        id="defaultplan" 
                        onChange={handleInputChange} 
                        value={formState.defaultplan} 
                        required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={handleClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </form>
        </Modal>
      )
}

export function UpdatePlanModal({ plan, onUpdatePlan, onDeletePlan, onClose, isOpen }) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(plan);
    const [error, setError] = useState(null);

    const termsList = ["Fall", "Winter", "Spring", "Summer"];
    const yearsList = [];
    for (let i = 2019; i <= 2034; i++) {
        yearsList.push(String(i));
    }

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
          setTimeout(() => {
            focusInputRef.current.focus();
          }, 0);
        }
      }, [isOpen]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(formState)) {
            onUpdatePlan(formState);
            setFormState(formState);
            setError(null);
            onClose();
        }
        setError(validateForm(formState));
    };

    const handleDeletePlan = () => {
        onDeletePlan();
        setFormState(initialPlanModalData);
        setError(null);
        onClose();
    }

    const handleClose = () => {
        setFormState(plan);
        setError(null);
        onClose();
    }

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
            <h3>Update this degree plan</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRowText}>
                <input
                    ref={focusInputRef}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Degree plan name"
                    value={formState.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.formRowSelect1}>
                <div className={styles.selectBlock}>
                    <label htmlFor="startterm">Start term</label>
                    <select 
                        name="startterm" 
                        id="startterm" 
                        onChange={handleInputChange}
                        value={formState.startterm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="startyear">Start year</label>
                    <select 
                        name="startyear" 
                        id="startyear" 
                        onChange={handleInputChange}
                        value={formState.startyear}  
                        required>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endterm">End term</label>
                    <select 
                        name="endterm" 
                        id="endterm" 
                        onChange={handleInputChange} 
                        value={formState.endterm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endyear">End Year</label>
                    <select 
                        name="endyear" 
                        id="endyear" 
                        onChange={handleInputChange} 
                        value={formState.endyear} 
                        required>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
            </div>
            <div className={styles.formRowSelect2}>
                <div className={styles.selectBlock}>
                    <label htmlFor="system">System</label>
                    <select 
                        name="system" 
                        id="system" 
                        onChange={handleInputChange} 
                        value={formState.system} 
                        required>
                            <option value="Quarter">Quarter</option>
                            <option value="Semester">Semester</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="summer">Summer term</label>
                    <select 
                        name="summer" 
                        id="summer" 
                        onChange={handleInputChange} 
                        value={formState.summer} 
                        required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="defaultplan">Default plan</label>
                    <select 
                        name="defaultplan"
                        id="defaultplan" 
                        onChange={handleInputChange} 
                        value={formState.defaultplan} 
                        required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={handleDeletePlan} className={styles.deleteButton}>Delete plan</button>
                <button type="button" onClick={handleClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </form>
        </Modal>
      )
}