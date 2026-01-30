"use client";

import { createSale } from "@/services/api";
import { Sale } from "@/types";
import React, { useState } from "react";

type AddSaleModalProp = {
    onClose: () => void;
    onSuccess: () => Promise<void>;
};

function AddSaleModal({ onClose, onSuccess }: AddSaleModalProp) {
    const [form, setForm] = useState<Omit<
        Sale,
        "id" | "company_id" | "sale_date"
    >>({
        sale_name: "",
        status: "Open",
        amount: 0,
        stage: "Proposal",
        stage_percentage: null,
        next_activity: "",
    });


    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createSale(form);
            await onSuccess();
            onClose();
        } catch (err) {
            console.error("Failed to save sale:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-50 fixed inset-0 bg-black/40 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-2xl w-full max-w-2xl"
            >
                <h3 className="text-lg font-semibold">Add New Sale</h3>

                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-4">
                    {/* Sale name. */}
                    <input
                        name="sale_name"
                        placeholder="Sale Name"
                        onChange={(e) =>
                            setForm({ ...form, sale_name: e.target.value })
                        }
                        className="input"
                        required
                    />

                    {/* Status. */}
                    <select
                        name="status"
                        value={form.status}
                        onChange={(e) =>
                            setForm({ ...form, status: e.target.value as Sale["status"] })
                        }
                        className="input"
                        required
                    >
                        <option>Open</option>
                        <option>Sold</option>
                        <option>Lost</option>
                        <option>Stalled</option>
                    </select>

                    {/* Amount. */}
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        onChange={(e) =>
                            setForm({ ...form, amount: Number(e.target.value) })
                        }
                        className="input"
                        required
                    />

                    {/* Stage. */}
                    <select
                        name="stage"
                        value={form.stage}
                        onChange={(e) => {
                            const value = e.target.value as Sale["stage"];

                            setForm({
                                ...form,
                                stage: value,
                                stage_percentage:
                                    value === "Proposal" ? form.stage_percentage : null,
                            });
                        }}
                        className="input"
                        required
                    >
                        <option value="">Select Stage</option>
                        <option value="Proposal">Proposal</option>
                        <option value="Sold">Sold</option>
                        <option value="Lost">Lost</option>
                        <option value="Stalled">Stalled</option>
                    </select>


                    {/* Percentage.. */}
                    {form.stage === "Proposal" && (
                        <input
                            type="number"
                            min={0}
                            max={100}
                            step={1}
                            placeholder="Stage (%)"
                            name="stage_percentage"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    stage_percentage: Number(e.target.value),
                                })
                            }
                            className="input"
                            required
                        />
                    )}

                    {/* Next activity. */}
                    <input
                        type="date"
                        name="next_activity"
                        onChange={(e) =>
                            setForm({ ...form, next_activity: e.target.value })
                        }
                        className="input"
                        required
                    />
                </div>
                {/* Actions. */}
                <div className="flex justify-end max-sm:justify-center gap-5 mt-6">
                    <button
                        disabled={loading}
                        type="button"
                        onClick={onClose}
                        className="bg-red-600 text-white px-4 py-2 rounded-full"
                    >
                        Cancel
                    </button>

                    <button
                        disabled={loading}
                        type="submit"
                        className="bg-teal-700 text-white px-4 py-2 rounded-full"
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddSaleModal;
