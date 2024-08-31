import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CourseModal.module.css";
import Modal from "./Modal";

const initialCourseModalData = {
    courseName: '',
    professor: '',
    units: 4,
    grade: '',
  };

function CourseModal({ isOpen, onClose, onAddCourse }) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(initialCourseModalData);

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
        if (formState.courseName) {
            onAddCourse(formState.courseName);
            setFormState((prevFormData) => ({
                ...prevFormData,
                courseName: '',
              }));
        }
    };

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <h4>Add a course</h4>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <label htmlFor="courseName">Course Name</label>
              <input
                ref={focusInputRef}
                type="text"
                id="courseName"
                name="courseName"
                value={formState.courseName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formRow}>
                <label htmlFor="professor">Professor</label>
                <input
                    type="text"
                    id="professor"
                    name="professor"
                    value={formState.professor}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.formRow}>
                <label htmlFor="units">Units</label>
                <input
                    type="number"
                    id="units"
                    name="units"
                    value={formState.units}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.formRow}>
                <label htmlFor="grade">Grade</label>
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    value={formState.grade}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.formRow}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Modal>
      )
}

export default CourseModal;