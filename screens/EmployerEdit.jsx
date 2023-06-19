import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const EmployerEdit = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [contact, setContact] = useState('0734567890');
  const [improvement, setImprovement] = useState('');
  const [awards, setAwards] = useState('');

  const toggleEditForm = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleSave = () => {
    // Perform save action here
    toggleEditForm();
  };

  const handleCancel = () => {
    // Reset form fields if necessary
    toggleEditForm();
  };

  return (
    <View style={{ flex: 1, marginTop: 40, paddingHorizontal: 16, marginBottom: 20,padding:2 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Team Member Profile</Text>
      </View>
      <View style={{ marginTop: 20 , marginBottom: 20,}}>
        <Text>Improvement</Text>
        <DropDownPicker
          items={[
            { label: 'Select an improvement', value: '' },
            { label: 'Presentation Skills', value: 'Presentation Skills' },
            { label: 'Time Management', value: 'Time' },
            { label: 'Networking', value: 'Networking' },
          ]}
          defaultValue={improvement}
          disabled={!isEditing}
          containerStyle={{ height: 40, marginBottom: 10 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => setImprovement(item.value)}
        />
        <Text>Productivity</Text>
        <DropDownPicker
          items={[
            { label: 'Select an improvement', value: '' },
            { label: 'level 1', value: 'Presentation Skills' },
            { label: 'level 2', value: 'Time' },
            { label: 'level 3', value: 'Networking' },
          ]}
          defaultValue={improvement}
          disabled={!isEditing}
          containerStyle={{ height: 40, marginBottom: 10 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => setImprovement(item.value)}
        />
        <Text>Efficiency</Text>
        <DropDownPicker
          items={[
            { label: 'Select an improvement', value: '' },
            { label: 'level 1', value: 'Presentation Skills' },
            { label: 'level 2', value: 'Time' },
            { label: 'level 3', value: 'Networking' },
          ]}
          defaultValue={improvement}
          disabled={!isEditing}
          containerStyle={{ height: 40, marginBottom: 10 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => setImprovement(item.value)}
        />
       
        <Text>Awards</Text>
        <DropDownPicker
          items={[
            { label: 'Select an award', value: '' },
            { label: 'Best Sales', value: 'award1' },
            { label: 'New Commer', value: 'award2' },
            { label: 'First Presentation', value: 'award3' },
          ]}
          defaultValue={awards}
          disabled={!isEditing}
          containerStyle={{ height: 40, marginBottom: 10 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => setAwards(item.value)}
        />
        <Text>Contact</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
          value={contact}
          editable={isEditing}
          onChangeText={setContact}
        />
      </View>
      {isEditing ? (
        <View>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={handleCancel} color="gray" />
        </View>
      ) : (
        <Button title="Edit" onPress={toggleEditForm} />
      )}
    </View>
  );
};

export default EmployerEdit;
