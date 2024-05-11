import { Link } from "react-router-dom";
import { Button, ConfigProvider, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { handleCreateWorkout } from '../redux/createWorkoutSlice';
import WorkoutForm from "./WorkoutForm";
import { handleCancel } from "../redux/createWorkoutSlice";

function Navbar() {
    const isModalOpen = useSelector((state) => state.newWorkout.value)
    const dispatch = useDispatch();


    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout buddy</h1>
                </Link>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                defaultHoverBorderColor: "#1aac83",
                                defaultHoverColor: "#1aac83"
                            },
                        },
                    }}
                >
                    <Button onClick={() => dispatch(handleCreateWorkout())}>Add a workout</Button>

                </ConfigProvider>
                <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={() => dispatch(handleCancel())}>
                    <WorkoutForm />
                </Modal>
            </div>
        </header>
    )
};

export default Navbar;