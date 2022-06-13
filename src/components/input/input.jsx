import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { IconName } from 'common/enums/enums';
import { Icon, Text, View } from 'components/components';
import { AppColor } from 'config/config';
import { useController } from 'hooks/hooks';
import { styles } from './styles';

const Input = ({ name, control, errors, iconName, placeholder, isSecure, isDisabled }) => {
  const { field } = useController({ name, control });

  const error = errors[name]?.message;

  return (
    <View>
      <View style={styles.inputWrapper}>
        <TextInput
          value={field.value}
          editable={!isDisabled}
          placeholder={placeholder}
          placeholderTextColor={AppColor.PLACEHOLDER}
          secureTextEntry={isSecure}
          autoCorrect={false}
          style={[
            styles.input,
            { opacity: isDisabled ? 0.5 : 1 },
            iconName ? { paddingLeft: 50 } : {}
          ]}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
        />
        {iconName && <Icon name={iconName} size={20} style={styles.icon} />}
      </View>
      {Boolean(error) && (
        <View style={styles.error}>
          <Icon name={IconName.EXCLAMATION_TRIANGLE} size={14} color={AppColor.ERROR} />
          <Text style={styles.errorMessage}>{error}</Text>
        </View>
      )}
    </View>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.oneOfType([PropTypes.object]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object]).isRequired,
  iconName: PropTypes.oneOf(Object.values(IconName)).isRequired,
  placeholder: PropTypes.string,
  isSecure: PropTypes.bool,
  isDisabled: PropTypes.bool
};

Input.defaultProps = {
  placeholder: '',
  isSecure: false,
  isDisabled: false
};

export { Input };
