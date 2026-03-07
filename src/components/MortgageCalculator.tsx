import { useState, useMemo } from 'react';
import { Calculator, Home, Percent, Calendar, TrendingDown, DollarSign, Info } from 'lucide-react';

const MortgageCalculator = () => {
    const [propertyPrice, setPropertyPrice] = useState(1500000);
    const [downPaymentPct, setDownPaymentPct] = useState(20);
    const [interestRate, setInterestRate] = useState(4.5);
    const [termYears, setTermYears] = useState(25);

    const results = useMemo(() => {
        const downPayment = (propertyPrice * downPaymentPct) / 100;
        const loanAmount = propertyPrice - downPayment;
        const monthlyRate = interestRate / 100 / 12;
        const numPayments = termYears * 12;

        let monthlyPayment = 0;
        if (monthlyRate === 0) {
            monthlyPayment = loanAmount / numPayments;
        } else {
            monthlyPayment =
                (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
                (Math.pow(1 + monthlyRate, numPayments) - 1);
        }

        const totalPayment = monthlyPayment * numPayments;
        const totalInterest = totalPayment - loanAmount;

        return {
            downPayment,
            loanAmount,
            monthlyPayment,
            totalPayment,
            totalInterest,
            principalPct: Math.round((loanAmount / totalPayment) * 100),
            interestPct: Math.round((totalInterest / totalPayment) * 100),
        };
    }, [propertyPrice, downPaymentPct, interestRate, termYears]);

    const fmt = (n: number) =>
        new Intl.NumberFormat('en-AE', { style: 'decimal', maximumFractionDigits: 0 }).format(n);

    const SliderInput = ({
        label,
        icon: Icon,
        value,
        min,
        max,
        step,
        suffix,
        display,
        onChange,
        hint,
    }: {
        label: string;
        icon: any;
        value: number;
        min: number;
        max: number;
        step: number;
        suffix: string;
        display: string;
        onChange: (v: number) => void;
        hint?: string;
    }) => (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5 text-[#B8960C]" />
                    {label}
                    {hint && (
                        <span className="group relative cursor-pointer">
                            <Info className="w-3 h-3 text-gray-800 hover:text-[#D4AF37]" />
                            <span className="absolute left-5 -top-1 z-10 hidden group-hover:block bg-black text-white text-xs rounded-lg px-3 py-1.5 w-44 shadow-lg">
                                {hint}
                            </span>
                        </span>
                    )}
                </label>
                <span className="text-sm font-bold text-[#D4AF37]">{display}</span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`,
                }}
            />
            <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-800">{min}{suffix}</span>
                <span className="text-xs text-gray-800">{max}{suffix}</span>
            </div>
        </div>
    );

    return (
        <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                        Mortgage Calculator
                    </h2>
                    <p className="text-gray-800 max-w-xl mx-auto text-base">
                        Estimate your monthly repayments and plan your property investment with confidence
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* ── Left: Sliders ── */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
                        {/* Gold accent */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A] rounded-full -mt-2 mb-2" />

                        <SliderInput
                            label="Property Price"
                            icon={Home}
                            value={propertyPrice}
                            min={200000}
                            max={20000000}
                            step={50000}
                            suffix=""
                            display={`AED ${fmt(propertyPrice)}`}
                            onChange={setPropertyPrice}
                            hint="Total purchase price of the property"
                        />
                        <SliderInput
                            label="Down Payment"
                            icon={DollarSign}
                            value={downPaymentPct}
                            min={5}
                            max={80}
                            step={1}
                            suffix="%"
                            display={`${downPaymentPct}% · AED ${fmt(results.downPayment)}`}
                            onChange={setDownPaymentPct}
                            hint="UAE minimum is typically 20% for expats, 15% for UAE nationals"
                        />
                        <SliderInput
                            label="Annual Interest Rate"
                            icon={Percent}
                            value={interestRate}
                            min={1}
                            max={12}
                            step={0.1}
                            suffix="%"
                            display={`${interestRate.toFixed(1)}%`}
                            onChange={setInterestRate}
                            hint="Average UAE mortgage rate is currently 4–5%"
                        />
                        <SliderInput
                            label="Loan Term"
                            icon={Calendar}
                            value={termYears}
                            min={5}
                            max={25}
                            step={1}
                            suffix=" yrs"
                            display={`${termYears} years`}
                            onChange={setTermYears}
                            hint="Maximum term in UAE is typically 25 years"
                        />

                        <p className="text-xs text-gray-800 pt-2 border-t border-gray-100">
                            * This calculator provides an estimate only. Actual mortgage terms depend on your bank and financial profile. Always consult a mortgage advisor.
                        </p>
                    </div>

                    {/* ── Right: Results ── */}
                    <div className="space-y-5">

                        {/* Monthly Payment — hero card */}
                        <div className="bg-[#D4AF37] rounded-2xl p-7 text-center shadow-xl shadow-[#D4AF37]/20">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Calculator className="w-5 h-5 text-black/60" />
                                <p className="text-black/70 text-sm font-semibold uppercase tracking-wider">Monthly Payment</p>
                            </div>
                            <p className="text-4xl md:text-5xl font-bold text-black">
                                AED {fmt(results.monthlyPayment)}
                            </p>
                            <p className="text-black/60 text-sm mt-1">per month for {termYears} years</p>
                        </div>

                        {/* Breakdown cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Loan Amount', value: `AED ${fmt(results.loanAmount)}`, sub: `${100 - downPaymentPct}% of price`, icon: Home },
                                { label: 'Down Payment', value: `AED ${fmt(results.downPayment)}`, sub: `${downPaymentPct}% upfront`, icon: DollarSign },
                                { label: 'Total Interest', value: `AED ${fmt(results.totalInterest)}`, sub: 'over loan term', icon: TrendingDown },
                                { label: 'Total Repayment', value: `AED ${fmt(results.totalPayment)}`, sub: 'principal + interest', icon: Calculator },
                            ].map(({ label, value, sub, icon: Icon }, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-200">
                                    <div className="w-8 h-8 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center mb-3">
                                        <Icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <p className="text-xs text-gray-800 font-semibold uppercase tracking-wide mb-1">{label}</p>
                                    <p className="text-sm font-bold text-black leading-tight">{value}</p>
                                    <p className="text-xs text-gray-800 mt-0.5">{sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Principal vs Interest bar */}
                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Payment Breakdown</p>
                            <div className="flex rounded-full overflow-hidden h-4 mb-4">
                                <div
                                    className="bg-[#D4AF37] transition-all duration-500"
                                    style={{ width: `${results.principalPct}%` }}
                                />
                                <div
                                    className="bg-gray-200 transition-all duration-500"
                                    style={{ width: `${results.interestPct}%` }}
                                />
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#D4AF37] inline-block" />
                                    <span className="text-gray-900 font-medium">Principal <span className="text-[#B8960C] font-bold">{results.principalPct}%</span></span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-gray-200 inline-block" />
                                    <span className="text-gray-900 font-medium">Interest <span className="font-bold text-gray-800">{results.interestPct}%</span></span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="/contact"
                            className="flex items-center justify-center gap-2 w-full bg-black hover:bg-gray-900 text-[#D4AF37] font-bold py-4 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md"
                        >
                            <Calculator className="w-4 h-4" />
                            Speak to a Mortgage Advisor
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                input[type='range']::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #D4AF37;
                    border: 3px solid white;
                    box-shadow: 0 2px 6px rgba(212,175,55,0.4);
                    cursor: pointer;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                }
                input[type='range']::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                    box-shadow: 0 2px 10px rgba(212,175,55,0.6);
                }
                input[type='range']::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #D4AF37;
                    border: 3px solid white;
                    box-shadow: 0 2px 6px rgba(212,175,55,0.4);
                    cursor: pointer;
                }
            `}</style>
        </section>
    );
};

export default MortgageCalculator;