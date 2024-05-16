import { Link } from "react-router-dom";
import { Button, ConfigProvider, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { handleCreateWorkout } from '../redux/createWorkoutSlice';
import WorkoutForm from "./WorkoutForm";
import { handleCancel } from "../redux/createWorkoutSlice";
import { useState } from "react";
import ContactUsForm from "./ContactUsForm";

function Navbar() {
    const isModalOpen = useSelector((state) => state.newWorkout.value)
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Eviie Nails</h1>
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
                    <Button onClick={() => { setModalOpen(true) }}>Book an appointment</Button>

                </ConfigProvider>
                <Modal title="Basic Modal" open={isModalOpen} footer={null} onCancel={() => dispatch(handleCancel())}>
                    <WorkoutForm />
                </Modal>
                <Modal title="Basic Modal" open={modalOpen} footer={null} onCancel={() => setModalOpen(false)}>
                    <ContactUsForm />
                </Modal>
            </div>
        </header>
    )
};

export default Navbar;