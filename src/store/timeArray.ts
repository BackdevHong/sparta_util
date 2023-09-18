import { createSlice } from "@reduxjs/toolkit";

interface Time {
  chap: number;
  data: [
    {
      jucha: number;
      time: number;
    }
  ];
}

const timeArray = createSlice({
  name: "timeArray",
  initialState: {
    value: [] as Time[],
    allTime: 0,
  },
  reducers: {
    add: (state, action) => {
      const step = action.payload.step;

      if (state.value.length === 0) {
        state.value.push({
          chap: step.chap,
          data: [
            {
              jucha: step.jucha,
              time: step.time,
            },
          ],
        });
      } else {
        const validateChapDuplicate = state.value.filter(
          (v) => v.chap === step.chap
        );

        if (validateChapDuplicate.length <= 0) {
          state.value.push({
            chap: step.chap,
            data: [
              {
                jucha: step.jucha,
                time: step.time,
              },
            ],
          });
        } else {
          validateChapDuplicate.forEach((element) => {
            const ele = element.data.filter(
              (element) => element.jucha === step.jucha
            );

            if (ele.length <= 0) {
              element.data.push({
                jucha: step.jucha,
                time: step.time,
              });
            } else {
              ele.forEach((value) => {
                value.time = step.time;
              });
            }
          });
        }
      }
    },

    calculateValue: (state, action) => {
      state.allTime = 0;
      state.value.forEach((value, index) => {
        value.data.forEach((value, index) => {
          state.allTime += value.time;
        });
      });
      console.log(state.allTime);
    },
  },
});

export default timeArray;
export const { add, calculateValue } = timeArray.actions;
