// Modal as a separate component
import ButtonSecondary from '@/components/forms/buttons/ButtonSecondary'
import { useEffect, useRef } from 'react'
import { clsx } from 'clsx'

interface Props {
  isOpen: boolean
  children: React.ReactElement
  onModalClose: () => void
  isMaxWidth?: boolean
}
function Modal({ isOpen, children, onModalClose, isMaxWidth = false }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen])

  return (
    <dialog ref={ref} onCancel={onModalClose}>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={clsx(
                'relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full mx-2 sm:mx-4',
                { 'sm:max-w-lg': !isMaxWidth },
              )}
            >
              <div className="bg-white dark:bg-slate-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div
                  className={clsx({ 'sm:flex sm:items-start': !isMaxWidth })}
                >
                  {children}
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-slate-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <ButtonSecondary action={() => onModalClose()}>
                  Cancel
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
