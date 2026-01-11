import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";

import carModels from "../data/CarModels.js";
import "../css/PartFinder.css";

function PartFinder() {
    const [model, setModel] = useState("");
    const [gen, setGen] = useState("");

    const handleModelChange = async(event) => {
        setModel(event.target.value);
        setGen('');
    };

    const handleGenChange = async(event) => {
        setGen(event.target.value);
    };

    const generations = model ? carModels[model] : [];

    return (
        <>
            <section className="partfinder">
                <Select
                    value={model}
                    onChange={handleModelChange}
                >
                {Object.keys(carModels).map((m) => (
                    <MenuItem key={m} value={m}>
                        {m.replaceAll('_', ' ')}
                    </MenuItem>
                ))}
                </Select>

                <Select
                    value={gen}
                    onChange={handleGenChange}
                    displayEmpty
                    disabled={!model}
                >
                {generations.map((g) => (
                    <MenuItem key={g} value={g}>
                        {g}
                    </MenuItem>
                ))}
                </Select>
            </section>
        </>
    );
}

export default PartFinder;
