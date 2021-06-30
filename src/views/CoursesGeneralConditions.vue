<template>
  <div id="app" class="section">
    <h1>Condições Gerais | Cursos Steps to Podium</h1>
    <p>
      A participação em cursos promovidos pelo Steps to Podium pressupõe o
      conhecimento e a aceitação integral das condições gerais que se seguem.
    </p>
    <p>
      A inscrição nos cursos do Steps to Podium deverá ser efetuada mediante
      preenchimento dos respetivos formulários (<a
        href="https://www.stepstopodium.com/courses"
        target="_blank"
        >https://stepstopodium.com/Courses</a
      >), sendo dada prioridade a cada um deles com base na ordem de receção dos
      mesmos.
    </p>
    <p>
      As inscrições só se consideram efetuadas após boa cobrança da totalidade
      do valor do curso, o que deverá verificar-se até 48 horas após a inscrição
      (em caso de menor antecedência relativamente ao dia do curso, o
      comprovativo do pagamento deve ser enviado para stepstopodium@gmail.com).
    </p>
    <p>O pagamento pode ser feito através de:</p>
    <ul>
      <li>
        <span style="text-decoration: underline;">mbway</span> para o número
        934653597 (coloca, por favor, o teu nome na descrição)
      </li>
      <li>
        <span style="text-decoration: underline;">transferência bancária</span>
        para o IBAN PT50 0010 0000 3518 4730 0012 8
      </li>
    </ul>
    <p>
      <span style="text-decoration: underline; font-weight: 600"
        >Só após a validação do pagamento é que a inscrição é oficialmente
        confirmada.</span
      >
      No momento da comunicação ao participante, este receberá ainda toda a
      informação necessária relativa ao curso.
    </p>
    <p>
      Se o pagamento for feito num momento em que o curso já está completo na
      data escolhida, o que impossibilita a sua participação, o participante
      poderá escolher outra data disponível ou pedir o reembolso do pagamento.
      Em caso de cancelamento do curso por parte do Steps to Podium, o valor
      pago pelo participante será reembolsado na íntegra.
    </p>
    <p>
      Caso o participante não consiga comparecer ao curso por algum motivo, deve
      comunicar o cancelamento do curso ao Steps to Podium, por escrito, para o
      email stepstopodium@gmail.com). Será efetuado o reembolso do valor total
      em caso de aviso prévio com 72 horas de antecedência; e
      <span style="text-decoration: underline; font-weight: 600"
        >o reembolso de 50% do valor total (25 euros) no caso de aviso prévio
        com 48 horas de antecedência.</span
      >
    </p>
    <p>
      O valor pago não será restituído em caso de falta de comparência, nem é
      possível a transferência da inscrição para outra data; e em nenhuma
      situação será restituído o valor da inscrição após a realização do curso.
    </p>
    <p>
      O Steps to Podium reserva-se o direito de alterar datas, horários ou mesmo
      cancelar cursos no caso do número mínimo de inscrições fixado não ser
      atingido. Nesse caso, todos os inscritos serão previamente avisados, com o
      máximo de antecedência possível à data de realização do curso, e o valor
      total do curso será reembolsado. Demais valores gastos pelo participante
      não são da responsabilidade do Steps to Podium.
    </p>
    <p>
      Os participantes estão obrigados ao cumprimento das normas de segurança
      vigentes no local de realização do curso; e o Steps to Podium não se
      responsabiliza pela perda ou dano de quaisquer objetos trazidos pelos
      inscritos.
    </p>
    <p>
      O Steps to Podium reserva-se no direito de modificar unilateralmente e em
      qualquer momento, sem aviso prévio, as presentes condições gerais.
    </p>
  </div>
</template>

<script>
export default {
  name: "CoursesGeneralConditions",
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  metaInfo() {
    return {
      title: this.$t("meta.coursestitle"),
      meta: [
        { name: "description", content: this.$t("meta.coursesdescription") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin: 2% 10% 5% 10%;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
}
</style>
