'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface RSVPFormValues {
    fullName: string;
    email: string;
    attendance: string;
    dietaryRestrictions: string;
    additionalGuests: string;
    allergies: string;
}

const RSVPForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Jméno je povinné')
            .min(3, 'Jméno musí mít alespoň 3 znaky'),
        email: Yup.string()
            .email('Neplatná e-mailová adresa')
            .required('E-mail je povinný'),
        attendance: Yup.string().required('Vyberte prosím, zda se zúčastníte'),
        dietaryRestrictions: Yup.string(),
        additionalGuests: Yup.string(),
        allergies: Yup.string(),
    });

    const initialValues: RSVPFormValues = {
        fullName: '',
        email: '',
        attendance: '',
        dietaryRestrictions: '',
        additionalGuests: '',
        allergies: '',
    };

    const handleSubmit = async (values: RSVPFormValues) => {
        setLoading(true);
        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbyE21amhJe-eRIVp1ABh-Ph-YpTRt6zXUZZ7bDkcn3cVpkQZ8ldsjpaGza9PjVjn63W/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: JSON.stringify({
                        fullName: values.fullName,
                        email: values.email,
                        attendance: values.attendance,
                        dietaryRestrictions: values.dietaryRestrictions,
                        additionalGuests: values.additionalGuests,
                    }),
                }
            );

            // S no-cors nemůžeme číst response, takže jen zobrazíme success
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Chyba při odesílání:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section bg-white py-12 sm:py-16 md:py-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-2 tracking-wider text-gray-800">
                    Potvrzení účasti
                </h2>
                <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
                    Potvrzení účasti je pro nás velmi důležité.
                </p>

                {submitted && (
                    <div className="mb-6 sm:mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm sm:text-base">
                        ✓ Děkujeme za vaši odpověď! Těšíme se na vás.
                    </div>
                )}

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                    Vaše jméno
                                </label>
                                <Field
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-700 text-gray-800"
                                    placeholder="Zadejte vaše jméno"
                                />
                                <ErrorMessage name="fullName">
                                    {(msg) => <div className="text-red-500 text-xs sm:text-sm mt-1">{msg}</div>}
                                </ErrorMessage>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                    E-mail
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-700 text-gray-800"
                                    placeholder="vase@email.com"
                                />
                                <ErrorMessage name="email">
                                    {(msg) => <div className="text-red-500 text-xs sm:text-sm mt-1">{msg}</div>}
                                </ErrorMessage>
                            </div>

                            {/* Attendance */}
                            <div>
                                <label htmlFor="attendance" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                    Přijedete na naši svatbu?
                                </label>
                                <Field
                                    as="select"
                                    id="attendance"
                                    name="attendance"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition bg-white text-gray-800"
                                >
                                    <option value="">Vyberte možnost</option>
                                    <option value="yes">Ano, rád/a se zúčastním</option>
                                    <option value="no">Ne, bohužel se nemohu zúčastnit</option>
                                </Field>
                                <ErrorMessage name="attendance">
                                    {(msg) => <div className="text-red-500 text-xs sm:text-sm mt-1">{msg}</div>}
                                </ErrorMessage>
                            </div>

                            {/* Dietary Restrictions */}
                            <div>
                                <label htmlFor="dietaryRestrictions" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                    Máte nějaké dietní omezení? (vegetarián, vegan, celiakie, bezlaktózy, apod.)
                                </label>
                                <Field
                                    as="textarea"
                                    id="dietaryRestrictions"
                                    name="dietaryRestrictions"
                                    rows="2"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition resize-none placeholder-gray-700 text-gray-800"
                                    placeholder="Popište vaše omezení..."
                                />
                            </div>

                            {/* Additional Guests */}
                            <div>
                                <label htmlFor="additionalGuests" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                    Kolik vás přijde? Uveďte prosím i počet dětí.
                                </label>
                                <Field
                                    type="number"
                                    id="additionalGuests"
                                    name="additionalGuests"
                                    min="1"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition placeholder-gray-700 text-gray-800"
                                    placeholder="1"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || loading}
                                className="w-full bg-gray-800 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Odesílám...' : 'Odeslat'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};

export default RSVPForm;
