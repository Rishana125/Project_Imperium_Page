import React from 'react';
import Pictures from './Pictures';
import {Row, Col} from 'react-bootstrap';

const Developing = () => {
    const taskList = [
        'Improve standard movement system',
        'Upload new animations',
        'Create map prototypes',
        'Add fireball casting',
        'Create target lock mode',
        'Create menus',
        'Add interface prototype and character characteristics'
    ];

    return (
        <Row className="mr-auto ml-auto mt-4" id="developing">
            <Col>
                <Pictures/>
            </Col>
            <Col>
                <h2>Developing</h2>
                <div className="mt-3">
                    <p>
                        We're using <a href="https://www.unrealengine.com/en-US/">Unreal Engine 4</a> for
                        developing.
                        Currently we've done these things:
                    </p>
                    <ul>
                        {taskList.map(value =>
                            <li>{value}</li>
                        )}
                    </ul>
                    <p className="mt-4">
                        This project is the first big game we've ever developed.
                        We really love this project. Each of us contributed a part of
                        ourselves to this game.
                    </p>
                    <h5><i>Maybe you'll love it as much as we are.</i></h5>
                </div>
            </Col>
        </Row>
    );
};

export default Developing;