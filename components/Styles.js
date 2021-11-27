import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    containerListCities: {flex: 1, backgroundColor: '#fff', paddingTop: 30, padding: 16,},
    containerTakeDataCity: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    containerGetClimeCity: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    containerHome: {
        flex: 1,
        backgroundColor: '#142950',    
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
      },
    scroll: { paddingHorizontal: 15, },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },      
    error: {fontWeight: 'bold',fontSize: 13,color: '#850000',},
    form_group: {marginTop: 30,},
    form_input: {
        backgroundColor: '#E3E3E3',
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 40,
    },
    form_text: {fontWeight: 'bold',},
    textApp: {
        color: 'rgb(255,233,0)',
        fontSize: 20,
        marginLeft: 15,
    },
    imageApp: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    dataList: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#18181bcc',    
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 40,
    },
    imageHome: {
        flex:1, 
        resizeMode:"cover", 
        justifyContent:"center"
    },
    imageCities: {
        flex:1, 
        resizeMode:"cover", 
    },
    imageListCities: {
        flex:1, 
        resizeMode:"cover", 
        justifyContent:"center",
        opacity: 0.8
    },
});

export default Styles;