import React from 'react';

const AboutMe = () => {
    return (
        <div className='py-10'>
            <div className='h-64 w-44'>
                <img src="https://i.ibb.co/kD3p6MC/profilephoto.jpg" alt="" />
            </div>
            <h1 className='text-4xl text-cyan-800'>Name: MD. RASHEDUL HAQUE ADOR</h1>
            <h1 className='text-4xl text-blue-800 py-3'> <a href="https://contacts.google.com/person/c983992226874029842?hl=en">E-mail: rashed.haque.ador1@gmail.com</a> </h1>

            <h1 className='text-center text-4xl text-cyan-700 m-6'>Educational Background</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Education Level</th>
                            <th>Passing Year</th>
                            <th>Board/University</th>
                            <th>CGPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SSC</td>
                            <td>2016</td>
                            <td>DHAKA</td>
                            <td>4.94</td>
                        </tr>
                        <tr>
                            <td>HSC</td>
                            <td>2018</td>
                            <td>DHAKA</td>
                            <td>3.92</td>
                        </tr>
                        <tr>
                            <td>B.Sc</td>
                            <td>2022</td>
                            <td>DAFFODIL INTERNATIONAL UNIVERSITY</td>
                            <td>3.55</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AboutMe;