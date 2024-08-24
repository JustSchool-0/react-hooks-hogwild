import React, {useState} from "react";

function NewHogForm({addHog}) {
    const [newHog, setNewHog] = useState({
        name: "",
        specialty: "",
        greased: false,
        weight: "",
        "highest medal achieved": "",
        image: "",
    });

    const handleChange = (e) => {
        setNewHog({...newHog, [e.target.name]: e.target.value});
    };

    const handleCheckboxChange = (e) => {
        setNewHog({...newHog, greased: e.target.checked});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addHog(newHog);
        setNewHog({
            name: "",
            specialty: "",
            greased: false,
            weight: "",
            "highest medal achieved": "",
            image: "",
        });
    };

    return (
        <form className="new-hog-form" onSubmit={handleSubmit}>
            <input className="input-field" name="name" value={newHog.name} onChange={handleChange} placeholder="Name"/>
            <input className="input-field" name="specialty" value={newHog.specialty} onChange={handleChange}
                   placeholder="Specialty"/>
            <input className="input-field" name="weight" value={newHog.weight} onChange={handleChange}
                   placeholder="Weight"/>
            <input className="input-field" name="highest medal achieved" value={newHog["highest medal achieved"]}
                   onChange={handleChange} placeholder="Highest Medal Achieved"/>
            <input className="input-field" name="image" value={newHog.image} onChange={handleChange}
                   placeholder="Image URL"/>
            <label className="checkbox-label">
                Greased:
                <input
                    type="checkbox"
                    name="greased"
                    checked={newHog.greased}
                    onChange={handleCheckboxChange}
                />
            </label>
            <button className="add-hog-button" type="submit">Add Hog</button>
        </form>
    );
}

export default NewHogForm;