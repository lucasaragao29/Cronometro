import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      numero:0,
      botao : "Iniciar" ,
      tempo : null
    };
    this.timer= null;
    this.iniciar= this.iniciar.bind(this);
    this.resetar= this.resetar.bind(this);
  }

  iniciar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Retornar'});
    }else{
      this.setState({botao :'Pausar'});
      this.timer = setInterval( () => {
      this.setState({numero: this.state.numero + 0.01})
    },100 );
      
    }
    
  }
  resetar(){
   if(this.time != null){
    clearInterval(this.timer)
   }
   this.setState ({
    tempo:this.state.numero,
    numero : 0,
    botao: 'Iniciar'
   })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
        source={require('./src/cronometro.png')}
        style={styles.Image}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>
        <View style={styles.btnArea}>
        <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
        <Text style={styles.btnText}>{this.state.botao}</Text>
        </TouchableOpacity>
                     
          

          <TouchableOpacity style={styles.botao} onPress={this.resetar}>
            <Text style={styles.btnText}>Resetar</Text>         
          </TouchableOpacity>
      </View>
      <View style={styles.registro}>
        <Text style={styles.tempo}>
          {this.state.tempo > 0 ? 'Ultimo Tempo: ' + this.state.tempo.toFixed(2) + 'seg': ' '}
        </Text>
      </View>
      </View>

      
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef',
  },
  timer:{
    marginTop:-160,
    color:'white',
    fontSize:65,
    fontWeigth:'bold'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:90,
    height:40,
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin:17,
    borderRadius:9,
  },
  btnText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },
  registro:{
    marginTop:40,
    
  },
  tempo:{
    fontSize:25,
    fontStyle:'italic',
    color:'#fff',
  }
});

export default App;
