import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { cycleContext } from "../../../../contexts/contexts";

export default function NewCycleForm() {
  const { activeCycle } = useContext(cycleContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I will work in</label>
      <TaskInput
        id="task"
        placeholder="Task name"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <label htmlFor="minutes">during</label>
      <MinutesAmountInput
        type="number"
        id="time"
        placeholder="0"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('timeInMin', { valueAsNumber: true })}
      />
      <span>minutes</span>
    </FormContainer>
  )
}
