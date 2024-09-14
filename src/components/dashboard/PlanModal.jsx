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
    summer: '',
    default: '',
  };

export default function PlanModal({ isOpen, onClose, onAddPlan}) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(initialPlanModalData);

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
        onAddPlan(formState);
        setFormState((prevFormData) => ({
            ...prevFormData,
            name: '',
          }));
        onClose();
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
                        required>
                            <option value="Fall" selected>Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="startYear">Start year</label>
                    <select 
                        name="startYear" 
                        id="startYear" 
                        onChange={handleInputChange} 
                        required>
                            <option value="2022">2022</option>
                            <option value="2023" selected>2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endTerm">End term</label>
                    <select 
                        name="endTerm" 
                        id="endTerm" 
                        onChange={handleInputChange} 
                        required>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring" selected>Spring</option>
                            <option value="Summer">Summer</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="endYear">End Year</label>
                    <select 
                        name="endYear" 
                        id="endYear" 
                        onChange={handleInputChange} 
                        required>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027" selected>2027</option>
                            <option value="2028">2028</option>
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
                        required>
                            <option value="Quarter">Quarter</option>
                            <option value="Semester">Winter</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="summer">Summer term</label>
                    <select 
                        name="summer" 
                        id="summer" 
                        onChange={handleInputChange} 
                        required>
                            <option value="yes">Yes</option>
                            <option value="no" selected>No</option>
                    </select>
                </div>
                <div className={styles.selectBlock}>
                    <label htmlFor="default">Default plan</label>
                    <select 
                        name="default"
                        id="default" 
                        onChange={handleInputChange} 
                        required>
                            <option value="yes">Yes</option>
                            <option value="no" selected>No</option>
                    </select>
                </div>
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
          </form>
        </Modal>
      )
}