import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CourseModal.module.css";
import Modal from "./Modal";

const initialCourseModalData = {
    courseName: '',
    professor: '',
    units: 4,
    grade: '',
  };

export function CourseModal({ isOpen, onClose, onAddCourse}) {
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
        if (formState.courseName && formState.units) {
            onAddCourse(formState.courseName, formState.professor, formState.grade, formState.units);
            setFormState((prevFormData) => ({
                ...prevFormData,
                courseName: '',
              }));
        }
    };

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <h3>Add a course</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <input
                    ref={focusInputRef}
                    type="text"
                    id="courseName"
                    name="courseName"
                    placeholder="Course name"
                    value={formState.courseName}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    id="units"
                    name="units"
                    placeholder="Units"
                    value={formState.units}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.formRow}>
                <input
                    type="text"
                    id="professor"
                    name="professor"
                    placeholder="Professor"
                    value={formState.professor}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    placeholder="Grade"
                    value={formState.grade}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
          </form>
        </Modal>
      )
}

export function UpdateCourseModal({ isOpen, onClose, onUpdateCourse, onDeleteCourse, course}) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(course);

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

    const handleDeleteCourse = () => {
        onDeleteCourse(course.id);
        setFormState(initialCourseModalData);
        onClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.name && formState.units) {
            onUpdateCourse(formState);
            setFormState(formState);
            onClose();
        }
    };

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <h3>Update a course</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
                <input
                    ref={focusInputRef}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Course name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    id="units"
                    name="units"
                    placeholder="Units"
                    value={formState.units}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className={styles.formRow}>
                <input
                    type="text"
                    id="professor"
                    name="professor"
                    placeholder="Professor"
                    value={formState.professor}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    placeholder="Grade"
                    value={formState.grade}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.formButtons}>
                <button type="button" onClick={handleDeleteCourse} className={styles.deleteButton}>Delete course</button>
                <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
          </form>
        </Modal>
      )
}


