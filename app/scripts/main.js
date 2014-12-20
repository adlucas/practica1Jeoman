 $("#registroForm").validate({
                onkeyup: false,
                onfocusout: false,
                onclick: false,
                rules: {
                    title: {
                        required: true
                    },
                    email: {
                        required:true,
                        remote:"php/validar_email_db.php"
                    },
                    comentarios: "required"
                }
                });