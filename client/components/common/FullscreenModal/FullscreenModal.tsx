import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import React, { useEffect, useRef } from 'react'

interface Props {
  title: string
  isOpen: boolean
  children: React.ReactElement
  onModalClose: () => void
}

function FullscreenModal({ isOpen, children, onModalClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen])

  return (
    <dialog
      className="fixed left-0 top-0 z-[1055] h-full w-full overflow-hidden outline-none"
      ref={ref}
      onCancel={onModalClose}
      tabIndex={-1}
    >
      <div className="pointer-events-none relative w-auto transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white dark:bg-slate-700 bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
          <div className="relative p-4 overflow-y-auto">
            {children}
          </div>

          <div className="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10 min-[0px]:rounded-none">
            <ButtonSecondary action={() => onModalClose()}>
              Cancel
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default FullscreenModal
