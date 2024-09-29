import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { TASKS_VALIDATION_SCHEMA } from "../../utils/validationSchemas";
import { createTask } from "../../store/slices/toDoListSlice";

function ToDoForm({ create }) {
  const initialValues = {
    taskName: "",
  };
  const submitHandler = (value, { resetForm }) => {
    create(value), resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={TASKS_VALIDATION_SCHEMA}
      >
        <Form>
          <label>
            <Field
              type="text"
              name="taskName"
              placeholder="New to do"
              autoFocus
            />
            <ErrorMessage name="taskName" component="span" />
          </label>
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  create: (value) => dispatch(createTask(value)),
});
export default connect(null, mapDispatchToProps)(ToDoForm);
