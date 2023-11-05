import React from 'react';
import { TextInput, Pressable } from 'react-native';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';

import Typography from '@components/typography';

import { VariantStyles } from '@components/typography/types';
import { DateFieldProps } from '@components/dateField/types';

import styles from '@components/dateField/styles';

function DateField({
  label, value, error = '', handleChange,
}: DateFieldProps) {
  const [showPicker, setShowPicker] = React.useState(false);

  const handleDateChange = (event: unknown, selectedDate?: Date) => {
    setShowPicker(true);
    if (selectedDate) {
      handleChange(selectedDate.toISOString());
      setShowPicker(false);
    }
  };

  const handlePress = () => setShowPicker(true);

  const errorDateFieldStyle = error ? styles.errorDateInput : undefined;
  const datePickerValue = value ? new Date(value) : new Date();

  return (
    <>
      <Typography text={label} variant={VariantStyles.SUBTITLE} />
      {!showPicker && (
        <Pressable onPress={handlePress}>
          <TextInput
            pointerEvents="none"
            value={value ? new Date(value).toLocaleDateString() : ''}
            style={[styles.normalDateInput, errorDateFieldStyle]}
            placeholder={format(new Date(), 'dd-MM-yyyy')}
          />
        </Pressable>
      )}

      {showPicker && (
        <DateTimePicker
          value={datePickerValue}
          mode="date"
          display="compact"
          onChange={handleDateChange}
          style={styles.datePicker}
        />
      )}
    </>
  );
}

export default DateField;
