// src/components/common/SkillBar.jsx
export default function SkillBar({ name, level }) {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-slate-900 dark:text-white">
          {name}
        </span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
          {level}%
        </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    )
}