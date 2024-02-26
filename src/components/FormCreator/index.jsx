import { Box } from "@mui/system";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import useResponsive from "../../hooks/useResponsive";
import { useSearchForm } from "../../hooks/useSearchForm";
import * as inputs from "./inputs/index";

const fullGridWidth = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
const FormCreator = React.forwardRef(
  (
    {
      formFields,
      selectOptions,
      onSubmit,
      mode,
      formData = {},
      isLoading,
      isSearchForm = false,
      isWatchEnabled = false,
      onWatchFieldChange = () => {},
    },
    formRef
  ) => {
    const methods = useForm({
      defaultValues: { ...formData },
    });
    const isMobile = useResponsive("down", "sm");

    const {
      control,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = methods;

    useSearchForm({ isSearchForm: isSearchForm, formRef, control, formFields });
    console.log("form errors", errors, formData);

    // useEffect(() => {
    //   if (watchFields.length > 0) {
    //     onWatchFieldChange(fieldsToWatch);
    //   }
    // }, [fieldsToWatch]);

    React.useEffect(() => {
      let subscription;
      if (isWatchEnabled)
        subscription = watch((value, { name, type }) =>
          onWatchFieldChange(value)
        );
      return () => {
        // reset();
        subscription && subscription.unsubscribe();
      };
    }, [watch, isWatchEnabled]);
    // React.useEffect(() => {
    //   return () => reset();
    // }, []);
    return (
      <FormProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: fullGridWidth,
              gridGap: (theme) => theme.spacing(2),
              width: "100%",
            }}
          >
            {formFields.map((el) => {
              if (el.hidden) {
                return;
              }
              if (el.hideAt && el.hideAt === mode) {
                return;
              }
              const Input = inputs[el.type];

              if (!Input) {
                return (
                  <Box key={el.name}>Input of type {el.type} not found</Box>
                );
              }
              return (
                <Box
                  key={el.name}
                  sx={{
                    gridColumn: `span ${
                      isMobile ? el.mobileWidth || 12 : el.width || 4
                    }`,
                  }}
                >
                  <Input
                    {...el}
                    control={control}
                    error={errors?.[el.name]?.message}
                    {...(isLoading && {
                      readOnly: true,
                    })}
                    {...(el.hasExternalOptions && {
                      options: selectOptions[el.name],
                    })}
                  />
                </Box>
              );
            })}
          </Box>
          <input type="submit" style={{ display: "none" }} ref={formRef} />
        </form>
      </FormProvider>
    );
  }
);

export default FormCreator;
