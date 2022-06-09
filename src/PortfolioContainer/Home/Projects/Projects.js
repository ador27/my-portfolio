import React from 'react';

const Projects = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Manufacturer Website</h2>
                    <p>● Maintain Inventory Products & Protected.</p>
                    <p>● API System Implementation</p>
                    <p>● ExpressJs CRUD Operation Implementation</p>
                    <h6>Technology: ReactJS, React-Router-DOM, Express.js, MongoDB, Firebase, Tailwind CSS, daisyUI</h6>
                    <div class="card-actions justify-end">
                        <a href="https://affinity-electronics.web.app/"><button class="btn btn-primary">Live Website</button></a>
                        <a href="https://github.com/ador27/manufacturer-website"><button class="btn btn-primary">Clint GitHub</button></a>
                        <a href="https://github.com/ador27/manufacturer-server"><button class="btn btn-primary">Server GitHub</button></a>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">WareHouse Website</h2>
                    <p>● Authentication Implementation</p>
                    <p>● Products Stocks and Delivery Update System.</p>
                    <p>● ExpressJs CRUD Operation Implementation.</p>
                    <h6>Technology: ReactJs, React-Router-DOM, Express.js, MongoDB, Firebase, Tailwind CSS</h6>
                    <div class="card-actions justify-end">
                        <a href="https://affinity-79d3a.web.app/"><button class="btn btn-primary">Live Website</button></a>
                        <a href="https://github.com/ador27/warehouse-management"><button class="btn btn-primary">Client GitHub</button></a>
                        <a href="https://github.com/ador27/warehouse-server"><button class="btn btn-primary">Server GitHub</button></a>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Travel Guide Website</h2>
                    <p>● Authentication Implementation</p>
                    <p>● Travel-guide services with details</p>
                    <p>● Service Booking</p>
                    <h6>Technology: React, React-Router-DOM, Firebase, Tailwind CSS, API</h6>
                    <div class="card-actions justify-end">
                        <a href="https://travel-guide-service.web.app/"><button class="btn btn-primary">Live Website</button></a>
                        <a href="https://github.com/ador27/independent-service-provider"><button class="btn btn-primary">GitHub</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;