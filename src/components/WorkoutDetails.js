import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Typography, message } from 'antd';
import { Link } from 'react-router-dom';

function WorkoutDetails({ workout }) {
    const [messageApi, contextHolder] = message.useMessage();

    const handleClick = async () => {
        await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        });
        messageApi
            .open({
                type: 'loading',
                content: 'Action in progress..',
                duration: 2.5,
            })
            .then(() => message.success('Loading finished', 2.5))
            .then(() => message.info('Loading finished', 2.5));
    }
    return (
        <div className='workout-details'>
            {contextHolder}
            <Link to={`/${workout._id}`} style={{textDecoration: "none"}}>
                <h4>{workout.title}</h4>
                <p><strong>Load (kg): </strong>{workout.load}</p>
                <p><strong>Reps: </strong>{workout.reps}</p>
                <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            </Link>
            {/* <span onClick={handleClick}>Delete</span> */}
            <DeleteOutlined onClick={handleClick} />
            <Typography.Text style={{marginTop:15, right:0}}><EditOutlined style={{color:"blue"}}/></Typography.Text>
        </div>
    )
};

export default WorkoutDetails;
