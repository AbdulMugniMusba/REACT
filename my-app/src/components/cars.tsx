import './cars.css'
function Cars() {
    return (
        <div>
            <h2>Car Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Toyota</td>
                        <td>Camry</td>
                        <td>2020</td>
                        <td>$24,000</td>
                    </tr>
                    <tr>
                        <td>Honda</td>
                        <td>Civic</td>
                        <td>2021</td>
                        <td>$22,000</td>
                    </tr>
                    <tr>
                        <td>Ford</td>
                        <td>Mustang</td>
                        <td>2019</td>
                        <td>$26,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cars;
