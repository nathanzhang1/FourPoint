import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/dashboard/PlanModal.module.css";
import Modal from "../Modal";

const initialPlanModalData = {
    name: '',
    startTerm: 'Fall',
    startYear: '2023',
    endTerm: 'Spring',
    endYear: '2027',
    system: 'Quarter',
    summer: 'No',
    default: 'No',
  };

function validateForm(formState) {
    if (formState.startYear > formState.endYear) {
        return "Please select a valid time range.";
    }

    if (formState.startYear === formState.endYear) {
        const termOrder = ["Winter", "Spring", "Summer", "Fall"];
        if (termOrder.indexOf(formState.startTerm) > termOrder.indexOf(formState.endTerm)) {
            return "Please select a valid time range.";
        }
    }

    if (formState.summer === "No" && (formState.startTerm === "Summer" || formState.endTerm === "Summer")) {
        return "Summer terms are off. Please reselect.";
    }

    if (formState.system === "Semester" && (formState.startTerm === "Winter" || formState.endTerm === "Winter")) {
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
            onClose();
        }
        setError(validateForm(formState));
    };

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
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
                    required
                />
            </div>
            <div className={styles.formRowSelect1}>
                <div className={styles.selectBlock}>
                    <label htmlFor="startTerm">Start term</label>
                    <select 
                        name="startTerm" 
                        id="startTerm" 
                        onChange={handleInputChange}
                        value={formState.startTerm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="startYear">Start year</label>
                    <select 
                        name="startYear" 
                        id="startYear" 
                        onChange={handleInputChange}
                        value={formState.startYear}  
                        required>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endTerm">End term</label>
                    <select 
                        name="endTerm" 
                        id="endTerm" 
                        onChange={handleInputChange} 
                        value={formState.endTerm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endYear">End Year</label>
                    <select 
                        name="endYear" 
                        id="endYear" 
                        onChange={handleInputChange} 
                        value={formState.endYear} 
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
                    <label htmlFor="default">Default plan</label>
                    <select 
                        name="default"
                        id="default" 
                        onChange={handleInputChange} 
                        value={formState.default} 
                        required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
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
            onClose();
        }
        setError(validateForm(formState));
    };

    const handleDeletePlan = () => {
        onDeletePlan();
        setFormState(initialPlanModalData);
        onClose();
    }

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
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
                    required
                />
            </div>
            <div className={styles.formRowSelect1}>
                <div className={styles.selectBlock}>
                    <label htmlFor="startTerm">Start term</label>
                    <select 
                        name="startTerm" 
                        id="startTerm" 
                        onChange={handleInputChange}
                        value={formState.startTerm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="startYear">Start year</label>
                    <select 
                        name="startYear" 
                        id="startYear" 
                        onChange={handleInputChange}
                        value={formState.startYear}  
                        required>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endTerm">End term</label>
                    <select 
                        name="endTerm" 
                        id="endTerm" 
                        onChange={handleInputChange} 
                        value={formState.endTerm} 
                        required>
                            {termsList.map((term) => (
                                <option key={term} value={term}>{term}</option>
                            ))}
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endYear">End Year</label>
                    <select 
                        name="endYear" 
                        id="endYear" 
                        onChange={handleInputChange} 
                        value={formState.endYear} 
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
                    <label htmlFor="default">Default plan</label>
                    <select 
                        name="default"
                        id="default" 
                        onChange={handleInputChange} 
                        value={formState.default} 
                        required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                    </select>
                </div>
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={handleDeletePlan} className={styles.deleteButton}>Delete plan</button>
                <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </form>
        </Modal>
      )
}