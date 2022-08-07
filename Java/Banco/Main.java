
public class Main {

	public static void main(String[] args) {
	Cliente venilton = new Cliente();
	venilton.setNome("Venilton");
	
		Conta cc = new ContaCorrete();
		Conta poupanca = new ContaPoupanca();
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();

    }
}