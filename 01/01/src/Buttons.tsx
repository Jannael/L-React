import { type Dispatch } from "react"

const colorClasses = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  delete: 'bg-delete',
  equal: 'bg-equal'
}

const textClasses = {
  primary: 'text-textPrimary',
  secondary: 'text-textSecondary'
}

type ColorClasses = typeof colorClasses[keyof typeof colorClasses]
type TextClasses = typeof textClasses[keyof typeof textClasses]

type props = { 
  value: string, 
  textColor: TextClasses, 
  colorClass?: ColorClasses, 
  classes?: string, 
  setDisplay: Dispatch<React.SetStateAction<string>>, 
  buttonFn: ({ set, value }: { value: string, set: Dispatch<React.SetStateAction<string>> }) => void
}

export function Button ({ value, textColor, colorClass, classes, setDisplay, buttonFn }: props) {
  const btnClasses = `${colorClass} ${classes} size-10 rounded-full hover:scale-105 transition-transform`
  const textClasses = `${textColor} font-bold`
  const handleClick = () => {
    buttonFn({ value, set: setDisplay })
  }

  return (
    <button className={btnClasses} onClick={handleClick}>
      <span className={textClasses}> {value} </span>
    </button>
  )
}

const getResult = (currentValue: string) => {
   try {
    return new Function(`return ${currentValue}`)()?.toString()
   } catch {
    return currentValue
   }
}

const defaultButtonFn = ({ set, value }: ButtonFn) => {
  return set((currentValue) => currentValue.concat(value) )
}

// const buttonValues = [ 'C', '/', '*', 'DEL', '-', '+', '=' ]
const buttonValues = [
  { buttonFn: ({ set }: ButtonFn) => set(''),
    value: 'C', colorClass: colorClasses.delete, textColor: textClasses.secondary },
  { buttonFn: defaultButtonFn, value: '/', colorClass: colorClasses.secondary, textColor: textClasses.secondary },
  { buttonFn: defaultButtonFn, value: '*', colorClass: colorClasses.secondary, textColor: textClasses.secondary },
  { buttonFn: ({ set }: ButtonFn) => set(currentValue => currentValue.length > 1 ? currentValue.slice(0, -1) : ''),
    value: 'DEL', colorClass: colorClasses.secondary, textColor: textClasses.secondary },
  { buttonFn: defaultButtonFn, value: '7', colorClass: colorClasses.primary, textColor: textClasses.primary },
  { buttonFn: defaultButtonFn, value: '8', colorClass: colorClasses.primary, textColor: textClasses.primary },
  { buttonFn: defaultButtonFn, value: '9', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '-', colorClass: colorClasses.secondary, textColor: textClasses.secondary },
  { buttonFn: defaultButtonFn, value: '4', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '5', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '6', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '+', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '1', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '2', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '3', colorClass: colorClasses.primary },
  { buttonFn: ({ set }: ButtonFn) => set(currentValue => getResult(currentValue)), 
    value: '=', colorClass: colorClasses.equal, textColor: textClasses.secondary },
  { buttonFn: defaultButtonFn, value: '.', colorClass: colorClasses.secondary, textColor: textClasses.secondary },
  { buttonFn: defaultButtonFn, value: '0', colorClass: colorClasses.primary },
  { buttonFn: defaultButtonFn, value: '00', colorClass: colorClasses.secondary, textColor: textClasses.secondary }
]

type ButtonFn = { set: Dispatch<React.SetStateAction<string>>, value: string }


export function Buttons ({ setDisplay }: { setDisplay: Dispatch<React.SetStateAction<string>>}) {
  return (
    <section className="grid grid-cols-4 grid-rows-5 gap-2">
      {buttonValues.map((btn) => {
        const { value, colorClass, buttonFn } = btn
        const isEqual = btn.value === '='
        const textColor = btn.textColor ? btn.textColor : textClasses.primary

        return (
          <Button 
            key={value} 
            setDisplay={setDisplay} 
            buttonFn={buttonFn}
            value={value} 
            textColor={textColor} 
            colorClass={colorClass} 
            classes={isEqual ? 'row-span-2 h-full' : ''} 
          />
        )
      })}
    </section>
  )
}
