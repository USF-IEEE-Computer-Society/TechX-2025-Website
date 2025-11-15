import { useState } from 'react'
import { Questions } from '../../data/faqData'

export default function FAQ() {
  const [OpenMenus, SetOpenMenus] = useState<boolean[]>(Array(Questions.length).fill(false))

  const ToggleButton = (id: number) => {
    SetOpenMenus(prev => {
      const next = prev.slice()
      next[id] = !next[id]
      return next
    })
  }

  return (
    <div id="FAQ" className="w-full h-auto pb-[3rem] bg-[#F5F5F5] flex flex-col items-center">
      <h1 className="text-[1.5rem] md:text-[2rem] tracking-tight font-bold pt-[2rem] mb-[1.25rem]">Frequently Asked Questions</h1>

      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
        {Questions.map(q => {
          const open = OpenMenus[q.id]

          return (
            <div key={q.id} className="w-full">
              {/* Header */}
              <div
                className={[
                  'flex flex-col border border-black bg-white hover:bg-[var(--color-primary)] transition-colors',
                  open ? 'rounded-t-[0.75rem] shadow-[0_0.5rem_2rem_rgba(0,0,0,0.12)]' : 'rounded-[0.75rem]',
                ].join(' ')}
              >
                <button
                  onClick={() => ToggleButton(q.id)}
                  aria-expanded={open}
                  className="relative w-full flex items-center justify-between px-[1rem] py-[1rem] text-left"
                >
                  <div className="flex items-center gap-[0.75rem] pr-[2.25rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={['w-[1.5rem] h-[1.5rem] transition-transform duration-200', open ? 'rotate-180' : 'rotate-0'].join(' ')}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>

                    <span className="text-[1.125rem] md:text-[1.25rem] leading-[1.75rem]">{q.Question}</span>
                  </div>
                </button>
              </div>

              <div
                className={[
                  'border-x border-b border-black rounded-b-[0.75rem] bg-white',
                  'transition-[grid-template-rows,opacity] duration-200 ease-out',
                  'grid',
                  open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <div className="px-[1.5rem] py-[1.25rem]">
                    <p className="text-[1.0625rem] leading-[1.75rem] text-black/80" dangerouslySetInnerHTML={{ __html: q.Response }}></p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
