import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/degree/CourseModal.module.css";
import Modal from "../Modal";

const initialCourseModalData = {
    name: '',
    professor: '',
    units: 4,
    grade: '',
  };

function validateForm(formState) {
  if (!formState.name) {
    return "Please input a course name.";
  }

  if ((!formState.units && formState.units !== 0) || formState.units < 0) {
    return "Please input a valid unit value for this course.";
  }

  return null;
}

export function CourseModal({ isOpen, onClose, onAddCourse}) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(initialCourseModalData);
    const [error, setError] = useState(null);

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
            onAddCourse(formState.name, formState.professor, formState.grade, formState.units);
            setFormState((prevFormData) => ({
                ...prevFormData,
                name: '',
              }));
            setError(null);
            onClose();
        }
        setError(validateForm(formState));
    };

    const handleClose = () => {
      setFormState(initialCourseModalData);
      setError(null);
      onClose();
    }

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
            <h3>Add a course</h3>
            <hr />
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
                />
                <input
                    type="number"
                    id="units"
                    name="units"
                    placeholder="Units"
                    value={formState.units}
                    onChange={handleInputChange}
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
                <button type="button" onClick={handleClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </form>
        </Modal>
      )
}

export function UpdateCourseModal({ isOpen, onClose, onUpdateCourse, onDeleteCourse, course}) {
    const focusInputRef = useRef(null);
    const [formState, setFormState] = useState(course);
    const [error, setError] = useState(null);

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
        onDeleteCourse(course.key);
        setFormState(initialCourseModalData);
        setError(null);
        onClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(formState)) {
            onUpdateCourse(formState);
            setFormState(formState);
            setError(null);
            onClose();
        }
        setError(validateForm(formState));
    };

    const handleClose = () => {
      setFormState(course);
      setError(null);
      onClose();
    }

      return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={handleClose}>
            <h3>Update this course</h3>
            <hr />
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
                />
                <input
                    type="number"
                    id="units"
                    name="units"
                    placeholder="Units"
                    value={formState.units}
                    onChange={handleInputChange}
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
                <button type="button" onClick={handleClose} className={styles.cancelButton}>Cancel</button>
                <button type="submit">Save changes</button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </form>
        </Modal>
      )
}


